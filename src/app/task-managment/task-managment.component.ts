import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Task } from '../core/models/task';
import { LocalStorageService } from '../core/services/local-storage.service';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-task-managment',
  templateUrl: './task-managment.component.html',
  styleUrls: ['./task-managment.component.css'],
})
export class TaskManagmentComponent implements OnInit, OnDestroy {
  ref: DynamicDialogRef | undefined;

  pendingTasks: Task[] = [];
  finishedTasks: Task[] = [];
  expiredTasks: Task[] = [];

  isShownAsCard: boolean = true;

  get hasFinishedTasks() {
    return this.finishedTasks.length > 0;
  }

  get hasExpiredTasks() {
    return this.expiredTasks.length > 0;
  }

  private get endOfDateToday() {
    const date: Date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  }

  private get startOfDateYesterday() {
    const date: Date = new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  reloadData() {
    const tasks = this.localStorageService.getAllData();

    // filter tasks that are not done and created today
    this.pendingTasks = tasks
      .filter(
        (t) =>
          t.isDone === false &&
          this.addADayToDate(t.created) > this.endOfDateToday
      ) 
      .sort((t1, t2) => (t2.hasPriority >= t1.hasPriority ? 1 : -1)); // put priority tasks first

    // filter tasks that are done and created today
    this.finishedTasks = tasks.filter(
      (t) =>
        t.isDone === true && this.addADayToDate(t.created) > this.endOfDateToday
    ); 

    // filter tasks that are created yesterday only and remain undone
    this.expiredTasks = tasks.filter(
      (t) =>
        t.isDone === false &&
        t.created &&
        this.addADayToDate(t.created) <= this.endOfDateToday &&
        t.created > this.startOfDateYesterday
    ); 
  }

  showTaskModal(task: Task | null) {
    let action = task ? 'Edit' : 'Create';

    if (task?.isDone) {
      task.id = null;
      action = 'Clone';
    }

    this.ref = this.dialogService.open(TaskModalComponent, {
      header: action + 'Task',
      data: { task, action },
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    this.ref.onClose.subscribe((task: Task) => {
      if (task) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Task Saved',
        });
        this.reloadData();
      }
    });
  }

  onDone(task: Task) {
    task.isDone = true;
    const taskIndex = this.pendingTasks.indexOf(task);
    this.pendingTasks.splice(taskIndex, 1);
    this.finishedTasks.push(task);
    this.localStorageService.setData(task.id, task);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Task Marked as Done',
    });
  }

  onRemove(task: Task) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete task '${task.title}'?`,
      accept: () => {
        this.localStorageService.removeData(task.id);
        this.pendingTasks.splice(this.pendingTasks.indexOf(task), 1);

        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Task Removed',
        });
      },
      reject: () => {
      }
    });
  }

  onRestore(task: Task) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to restore task '${task.title}'?`,
      accept: () => {
        const newTask = { ...task };
        newTask.created = new Date();

        this.expiredTasks.splice(this.expiredTasks.indexOf(task), 1);
        this.pendingTasks.push(newTask);

        this.localStorageService.setData(newTask.id, newTask);

        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Task Restored',
        });
      },
      reject: () => {
      }
    });
  }

  setIsShownAsCard() {
    this.isShownAsCard = !this.isShownAsCard;
  }

  private addADayToDate(date?: Date) {
    if (!date) {
      return new Date();
    }

    return new Date(date.getTime() + 1000 * 60 * 60 * 24);
  }
}

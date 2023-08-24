import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { Task } from './core/models/task';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'daily-todo-list';

  ref: DynamicDialogRef | undefined;

  pendingTasks: Task[] = [];
  finishedTasks: Task[] = [];
  expiredTasks: Task[] = [];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const tasks = this.localStorageService.getAllData();
    this.pendingTasks = tasks
      .filter((t) => t.isDone === false)
      .sort((t1, t2) => (t2.hasPriority >= t1.hasPriority ? 1 : -1));
    this.finishedTasks = tasks.filter((t) => t.isDone === true);
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
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}

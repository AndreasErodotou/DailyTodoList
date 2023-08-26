import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-table-pending',
  templateUrl: './task-managment-table-pending.component.html',
  styleUrls: ['./task-managment-table-pending.component.css'],
})
export class TaskManagmentTablePendingComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() finishedTasks: Task[] = [];
  @Output() showTaskModal = new EventEmitter();
  @Output() onDone = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private confirmationService: ConfirmationService
  ) {}

  callShowTaskModal(task: Task) {
    if (this.showTaskModal) {
      this.showTaskModal.emit(task);
    }
  }

  callOnDone(task: Task) {
    if (this.onDone) {
      this.onDone.emit(task);
    }
  }

  callOnRemove(task: Task) {
    if (this.onRemove) {
      this.onRemove.emit(task);
    }
  }
}

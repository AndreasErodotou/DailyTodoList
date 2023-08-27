import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-table-finished',
  templateUrl: './task-managment-table-finished.component.html',
  styleUrls: ['./task-managment-table-finished.component.css'],
})
export class TaskManagmentTableFinishedComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() finishedTasks: Task[] = [];
  @Output() showTaskModal = new EventEmitter();

  callShowTaskModal(task: Task) {
    if (this.showTaskModal) {
      this.showTaskModal.emit(task);
    }
  }
}

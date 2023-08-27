import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-cards-finished',
  templateUrl: './task-managment-cards-finished.component.html',
  styleUrls: ['./task-managment-cards-finished.component.css'],
})
export class TaskManagmentCardsFinishedComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() finishedTasks: Task[] = [];
  @Output() showTaskModal = new EventEmitter();

  callShowTaskModal(task: Task) {
    if (this.showTaskModal) {
      this.showTaskModal.emit(task);
    }
  }
}

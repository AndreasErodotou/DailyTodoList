import { Component, Input } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-cards-pending',
  templateUrl: './task-managment-cards-pending.component.html',
  styleUrls: ['./task-managment-cards-pending.component.css'],
})
export class TaskManagmentCardsPendingComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() finishedTasks: Task[] = [];
  @Input() showTaskModal!: (task: Task | null) => void | null;
  @Input() onDone!: (task: Task) => void;
  @Input() onRemove!: (task: Task) => void;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private confirmationService: ConfirmationService
  ) {}

  callShowTaskModal(task: Task) {
    if (this.showTaskModal) {
      this.showTaskModal(task);
    }
  }

  callOnDone(task: Task) {
    if (this.onDone) {
      this.onDone(task);
    }
  }

  callOnRemove(task: Task) {
    if (this.onRemove) {
      this.onRemove(task);
    }
  }
  
}


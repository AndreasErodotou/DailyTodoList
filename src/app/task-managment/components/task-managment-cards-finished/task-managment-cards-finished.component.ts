import { Component, Input } from '@angular/core';
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
  @Input() showTaskModal!: (task: Task | null) => void | null;

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
}

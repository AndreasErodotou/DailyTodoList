import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-cards-expired',
  templateUrl: './task-managment-cards-expired.component.html',
  styleUrls: ['./task-managment-cards-expired.component.css']
})
export class TaskManagmentCardsExpiredComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() expiredTasks: Task[] = [];
  @Output() onRestore = new EventEmitter();

  callOnRestore(task: Task) {
    if (this.onRestore) {
      this.onRestore.emit(task);
    }
  }
}

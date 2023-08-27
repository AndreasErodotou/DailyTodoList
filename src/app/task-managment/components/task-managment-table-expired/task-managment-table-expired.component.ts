import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-task-managment-table-expired',
  templateUrl: './task-managment-table-expired.component.html',
  styleUrls: ['./task-managment-table-expired.component.css']
})
export class TaskManagmentTableExpiredComponent {
  @Input() pendingTasks: Task[] = [];
  @Input() expiredTasks: Task[] = [];
  @Output() onRestore = new EventEmitter();

  callOnRestore(task: Task) {
    if (this.onRestore) {
      this.onRestore.emit(task);
    }
  }
}

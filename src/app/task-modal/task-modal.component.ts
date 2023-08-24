import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from '../core/models/task';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {
  task: Task;
  taskForm: FormGroup; 

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private localStorageService: LocalStorageService ) {
    this.task = this.config.data;

    this.taskForm = new FormGroup({
      title: new FormControl(this.task?.title, Validators.required),
      description: new FormControl(this.task?.description, Validators.required),
      priority: new FormControl(this.task? this.task.priority : false)
    });
  }

  close() {
    this.ref.close();
  }

  saveTask() {
    const taskFromForm: Task = this.taskForm.getRawValue();
    console.log(taskFromForm);
    this.localStorageService.setData(taskFromForm.title?? 'WithoutTitle',taskFromForm);
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

  task: any;

  taskForm: FormGroup; 

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig ) {
    this.task = this.config.data;

    this.taskForm = new FormGroup({
      title: new FormControl(this.task?.title, Validators.required),
      description: new FormControl(this.task?.description, Validators.required),
      priority: new FormControl(this.task? this.task.priority : false)
    });
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from '../core/models/task';
import { LocalStorageService } from '../core/services/local-storage.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {
  task: Task;
  action: string;
  taskForm: FormGroup; 

  get title(){
    return this.taskForm.get('title');
  }

  get description(){
    return this.taskForm.get('description');
  }

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private localStorageService: LocalStorageService) {
    this.task = this.config.data.task;
    this.action = this.config.data.action;

    this.taskForm = new FormGroup({
      title: new FormControl(this.task?.title, Validators.required),
      description: new FormControl(this.task?.description, Validators.required),
      hasPriority: new FormControl(this.task? this.task.hasPriority : false)
    });
  }

  close(task?:Task) {
    this.ref.close(task);
  }

  saveTask() {
    this.task = { 
      ...this.task,
      id: this.task?.id?? uuid.v4(),
      title: this.title?.value,
      description: this.description?.value,
      hasPriority: this.taskForm.get('hasPriority')?.value,
      created: this.task?.created ?? new Date(),
      isDone: false
    }

    this.localStorageService.setData(this.task.id, this.task);
    this.close(this.task);
  }

}

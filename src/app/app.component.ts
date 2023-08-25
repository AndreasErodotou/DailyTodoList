import {
  Component,
} from '@angular/core';

import { TaskManagmentComponent } from './task-managment/task-managment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'daily-todo-list';
}

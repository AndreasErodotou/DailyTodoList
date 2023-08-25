import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(key: string | null, data: Task): void {
    if(!key){
      return;
    }

    const serializedObject = JSON.stringify(data);

    localStorage.setItem(key, serializedObject);
  }

  getData(key: string | null): Task | null {
    if(!key){
      return null;
    }

    const serializedObject = localStorage.getItem(key);

    if(!serializedObject){
      return null;
    }

    const task = JSON.parse(serializedObject);
    task.created = new Date(task.created);
    return task;
  }

  getAllData(): Task[] {
    const allData: Task[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = this.getData(key);

      if(!data){
        continue;
      }

      allData.push(data);
    }

    return allData;
  }

  removeData(key: string | null): void {
    if(!key){
      return;
    }
    
    localStorage.removeItem(key);
  }
}

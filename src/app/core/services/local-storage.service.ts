import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(key: string, data: Task): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): Task {
    const data = localStorage.getItem(key);
    return data? JSON.parse(data) : null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}

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

  getAllData(): { [key: string]: any } {
    const allData: { [key: string]: any } = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      
      if(!key){
        continue;
      }

      const data = this.getData(key);
      allData[key] = data;
    }

    return allData;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}

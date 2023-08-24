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

    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string | null): Task | null {
    if(!key){
      return null;
    }

    const data = localStorage.getItem(key);
    return data? JSON.parse(data) : null;
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

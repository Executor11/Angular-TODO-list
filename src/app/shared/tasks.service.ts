import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Task } from './task';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private dataService: DataService) {}

  addTask(task: Task) {
    console.log('task add');

    this.dataService.tasks.unshift(task);

    console.log(this.dataService.tasks);
  }
  getTasks() {
    return this.dataService.tasks.slice();
  }

  deleteTask(task: Task) {
    this.dataService.tasks.splice(this.dataService.tasks.indexOf(task), 1);
  }

  createNewId(): number {
    return this.dataService.tasks.length + 1;
  }
}

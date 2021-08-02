import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  date: Date = new Date();
  constructor(private dataService: DataService) {
    // this.date.setDate(this.date.getDate() - 1);
  }

  addTask(task: Task): void {
    this.dataService.tasks.unshift(task);
  }

  getTasks(): Task[] {
    return this.dataService.tasks.slice().filter((task) => {
      if (typeof task.date === 'string') {
        console.log(
          task.date,
          this.date.toString().slice(0, 10),
          'this is new day'
        );

        return task.date === this.date.toISOString().slice(0, 10);
      }
      return (
        task.date!.toISOString().slice(0, 10) ===
        this.date.toISOString().slice(0, 10)
      );
    });
  }

  deleteTask(task: Task): void {
    this.dataService.tasks.splice(this.dataService.tasks.indexOf(task), 1);
  }

  // find max id and increment 1
  createNewId(): number {
    return (
      this.dataService.tasks
        .map((e: Task) => e.id)
        .reduce((acc: number, cur: number) => (acc > cur ? acc : cur), 0) + 1
    );
  }

  filterByDate(date: Date) {
    console.log(date, this.date, 'filter');

    this.date = date;
  }
}

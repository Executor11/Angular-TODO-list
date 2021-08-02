import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DateManageService } from './date-manage.service';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
//
export class TasksService {
  //date filter
  date: Date = new Date();
  // filter by day, week, month, year
  filterMethod: string = 'week';

  constructor(
    private dataService: DataService,
    private dateManageService: DateManageService
  ) {}

  addTask(task: Task): void {
    this.dataService.tasks.unshift(task);
  }

  checkDateEntrance(date: string): boolean {
    const ranges = this.dateManageService.getWeekRanges().map((range) => {
      return `${range.year}-${
        String(range.month).length == 1 ? '0' + range.month : range.month
      }-${String(range.day).length == 1 ? '0' + range.day : range.day}`;
    });

    return (
      new Date(date) >= new Date(ranges[0]) &&
      new Date(date) <= new Date(ranges[1])
    );
  }

  getTasks(): Task[] {
    return this.dataService.tasks.slice().filter((task) => {
      // new task means if date is string return date, else return date to string and format "dd-mm-yyyy"
      const taskDate =
        typeof task.date === 'string'
          ? task.date
          : task.date!.toISOString().slice(0, 10);

      // filtering by day
      if (this.filterMethod === 'day') {
        return taskDate === this.date.toISOString().slice(0, 10);
      } else {
        // filtering by week, month, year
        return this.checkDateEntrance(taskDate);
      }
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

  // help getTasks function for filtering
  filterByDate(date: Date) {
    this.date = date;
  }

  //filering method by day, week, month, year
  setFilterMethod(method: string) {
    this.filterMethod = method;
  }
}

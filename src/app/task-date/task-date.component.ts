import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-date',
  templateUrl: './task-date.component.html',
  styleUrls: ['./task-date.component.scss'],
})
export class TaskDateComponent implements OnInit {
  date: Date = new Date();

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.setFilterMethod('day');
  }

  nextDay() {
    this.date.setDate(this.date.getDate() + 1);
    this.date = new Date(this.date);
    this.tasksService.filterByDate(this.date);
  }

  prevDay() {
    this.date.setDate(this.date.getDate() - 1);
    this.date = new Date(this.date);
    this.tasksService.filterByDate(this.date);
  }
}

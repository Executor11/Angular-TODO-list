import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

  navToDay() {
    this.tasksService.setFilterMethod('day');
  }

  navToOtherDate() {
    this.tasksService.setFilterMethod('week or other');
  }
}

import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  ngOnInit() {}
}

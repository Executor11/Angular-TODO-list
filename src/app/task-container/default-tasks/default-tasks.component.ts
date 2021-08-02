import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-default-tasks',
  templateUrl: './default-tasks.component.html',
  styleUrls: ['./default-tasks.component.scss'],
})
export class DefaultTasksComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  ngOnInit() {}

  identify(_index: any, item: any) {
    return item.id;
  }
}

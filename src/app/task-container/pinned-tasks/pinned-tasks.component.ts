import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-pinned-tasks',
  templateUrl: './pinned-tasks.component.html',
  styleUrls: ['./pinned-tasks.component.scss'],
})
export class PinnedTasksComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  ngOnInit() {}

  identify(_index: any, item: any) {
    return item.id;
  }
}

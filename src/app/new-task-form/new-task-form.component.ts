import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { Task } from 'src/app/shared/task.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss'],
  animations: [
    trigger('open', [
      state('create', style({ opacity: 0 })),
      transition(':enter', [
        style({
          height: '300px',
          opacity: 1,
        }),
        animate('0.3s ease-in-out'),
      ]),
      // transition(':leave', animate(2000, style({ opacity: 0.5 }))),
    ]),
  ],
})
export class NewTaskFormComponent implements OnInit {
  newTask: boolean = false;

  title = '';
  description = '';
  date = new Date();

  constructor(public taskService: TasksService) {}

  ngOnInit() {}

  cancelTask() {
    this.newTask = false;
    this.title = '';
    this.description = '';
    this.date = new Date();

    // for service to share between task-container height
  }

  newTaskCreate() {
    this.newTask = true;
  }

  //need validation
  addTask() {
    if (this.title) {
      const newTask: Task = {
        id: this.taskService.createNewId(),
        title: this.title,
        description: this.description,
        date: this.date,
        isCompleted: false,
        isPinned: false,
      };

      this.taskService.addTask(newTask);
      this.cancelTask();
    }
  }
}

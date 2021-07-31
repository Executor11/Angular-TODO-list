import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss'],
})
export class NewTaskFormComponent implements OnInit {
  newTask: boolean = false;

  title = '';
  description = '';
  date: Date;

  constructor(public taskService: TasksService) {
    this.date = new Date();
  }

  ngOnInit() {}

  cancelTask() {
    this.newTask = false;
    this.title = '';
    this.description = '';
    this.date = new Date();
  }

  //need validation
  addTask() {
    console.log('some data');
    const newTask: Task = {
      id: this.taskService.createNewId(),
      title: this.title,
      description: this.description,
      date: this.date,
      isCompleted: false,
      isPinned: false,
    };

    this.taskService.addTask(newTask);
  }
}

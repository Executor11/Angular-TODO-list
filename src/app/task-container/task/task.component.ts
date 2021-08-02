import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Task } from 'src/app/shared/task.model';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @ViewChild('dropMenu') dropMenu!: ElementRef;
  isOpen: boolean = false;

  //tasks

  @Input() task!: Task;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

  // танец с бубнами понимаю что я творю, но лучше пока не знаю
  dropDownMenu() {
    this.isOpen = !this.dropMenu.nativeElement.classList.contains('open');
  }
  hideDropDown() {
    this.isOpen = false;
    this.dropMenu.nativeElement.classList.remove('open');
  }

  // pin task
  pinTask() {
    this.task.isPinned = !this.task.isPinned;
  }

  deleteTask() {
    this.tasksService.deleteTask(this.task);
  }
}

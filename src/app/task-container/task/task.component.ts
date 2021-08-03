import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Task } from 'src/app/shared/task.model';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('create', style({ opacity: 1 })),
      transition(':enter', [
        style({
          opacity: 1,
          backgroundColor: '#757b84',
          transform: 'translateX(100%) translateY(-100px) ',
        }),
        animate('0.3s ease-in-out'),
      ]),
      transition(':leave', animate(2000, style({ opacity: 0.5 }))),
    ]),
    trigger('show', [
      state('create', style({ opacity: 0 })),
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.5s ease-in-out'),
      ]),
      transition(':leave', animate(100, style({ opacity: 0 }))),
    ]),
  ],
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

import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Create Application',
      description: 'Creating ToDo application with Angular',
      date: new Date(),
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Create Components',
      description: 'Components Created',
      date: new Date(),
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Adding Functional',
      description: 'Service Created for Functional',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Complete Application',
      description: '',
      date: new Date(),
      isCompleted: false,
      isPinned: true,
    },
  ];

  constructor() {}
}

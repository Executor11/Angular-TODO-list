import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Create Application',
      description: 'Creating ToDo application with Angular',
      date: new Date('11,07,2021'),
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Create Components',
      description: 'Components Created',
      date: new Date('11,07,2021'),
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Adding Functional',
      description: 'Service Created for Functional',
      date: new Date('11,07,2021'),
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Complete Application',
      description: '',
      date: new Date('12,07,2021'),
      isCompleted: false,
      isPinned: true,
    },
  ];

  constructor() {}
}

import { Injectable } from '@angular/core';
import { DateRange } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class DateManageService {
  dateRanges: Array<DateRange> = [
    {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
    {
      day: new Date().getDate() + 7,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
  ];

  getDateRanges(): DateRange[] {
    return this.dateRanges.slice();
  }

  setDateRanges(startRange: Date, endRange: Date): void {
    this.dateRanges = [
      {
        day: startRange.getDate(),
        month: startRange.getMonth() + 1,
        year: startRange.getFullYear(),
      },
      {
        day: endRange.getDate(),
        month: endRange.getMonth() + 1,
        year: endRange.getFullYear(),
      },
    ];
  }

  constructor() {}
}

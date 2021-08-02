import { Injectable } from '@angular/core';
import { DateRange } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class DateManageService {
  weekRanges: Array<DateRange> = [
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

  getWeekRanges(): DateRange[] {
    return this.weekRanges.slice();
  }

  setWeekRanges(startRange: Date, endRange: Date): void {
    this.weekRanges = [
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
    console.log(this.weekRanges);
  }

  constructor() {}
}

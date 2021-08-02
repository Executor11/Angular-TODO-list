import { Component, OnInit } from '@angular/core';
import { DateManageService } from 'src/app/shared/date-manage.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss', '../task-date.component.scss'],
})
export class MonthComponent implements OnInit {
  startMonth: Date = new Date();
  endMonth: Date = new Date();
  constructor(private dateManageService: DateManageService) {
    this.startMonth.setMonth(this.endMonth.getMonth());
    this.endMonth.setMonth(this.endMonth.getMonth() + 1);
  }

  ngOnInit() {
    this.dateManageService.setWeekRanges(this.startMonth, this.endMonth);
  }

  prevMonth(): void {
    this.startMonth.setMonth(this.startMonth.getMonth() - 1);
    this.endMonth.setMonth(this.endMonth.getMonth() - 1);

    this.startMonth = new Date(this.startMonth);
    this.endMonth = new Date(this.endMonth);

    this.dateManageService.setWeekRanges(this.startMonth, this.endMonth);
  }

  nextMonth(): void {
    this.startMonth.setMonth(this.startMonth.getMonth() + 1);
    this.endMonth.setMonth(this.endMonth.getMonth() + 1);

    this.startMonth = new Date(this.startMonth);
    this.endMonth = new Date(this.endMonth);

    this.dateManageService.setWeekRanges(this.startMonth, this.endMonth);
  }
}

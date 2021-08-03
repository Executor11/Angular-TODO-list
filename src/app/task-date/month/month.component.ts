import { Component, OnInit } from '@angular/core';
import { DateManageService } from 'src/app/shared/date-manage.service';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss', '../task-date.component.scss'],
})
export class MonthComponent implements OnInit {
  startMonth: Date = new Date();
  endMonth: Date = new Date();
  constructor(
    private dateManageService: DateManageService,
    private tasksService: TasksService
  ) {
    this.startMonth.setMonth(this.endMonth.getMonth());
    this.endMonth.setMonth(this.endMonth.getMonth() + 1);
  }

  ngOnInit() {
    this.dateManageService.setDateRanges(this.startMonth, this.endMonth);

    this.tasksService.setFilterMethod('month');
  }

  setMonthRange() {
    this.startMonth = new Date(
      this.startMonth.getFullYear(),
      this.startMonth.getMonth(),
      1
    );
    this.endMonth = new Date(
      this.endMonth.getFullYear(),
      this.endMonth.getMonth(),
      1
    );

    this.dateManageService.setDateRanges(this.startMonth, this.endMonth);
  }

  prevMonth(): void {
    this.startMonth.setMonth(this.startMonth.getMonth() - 1);
    this.endMonth.setMonth(this.endMonth.getMonth() - 1);

    this.setMonthRange();
  }

  nextMonth(): void {
    this.startMonth.setMonth(this.startMonth.getMonth() + 1);
    this.endMonth.setMonth(this.endMonth.getMonth() + 1);

    this.setMonthRange();
  }
}

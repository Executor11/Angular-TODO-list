import { Component, OnInit } from '@angular/core';
import { DateManageService } from 'src/app/shared/date-manage.service';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss', '../task-date.component.scss'],
})
export class YearComponent implements OnInit {
  year: number = 2021;

  startFullYear: Date = new Date(new Date().getFullYear(), 0, 1);
  endFullYear: Date = new Date(new Date().getFullYear(), 11, 31);

  constructor(
    private dateManageService: DateManageService,
    private tasksService: TasksService
  ) {
    this.startFullYear.setFullYear(this.startFullYear.getFullYear());
    this.endFullYear.setFullYear(this.endFullYear.getFullYear());
  }

  ngOnInit() {
    this.dateManageService.setDateRanges(this.startFullYear, this.endFullYear);

    this.tasksService.setFilterMethod('month');
  }

  setYear(): void {
    this.startFullYear = new Date(this.startFullYear);
    this.endFullYear = new Date(this.endFullYear);
    this.dateManageService.setDateRanges(this.startFullYear, this.endFullYear);

    this.year = this.dateManageService.getDateRanges()[0].year;
  }

  prevFullYear(): void {
    this.startFullYear.setFullYear(this.startFullYear.getFullYear() - 1);
    this.endFullYear.setFullYear(this.endFullYear.getFullYear() - 1);

    this.setYear();
  }

  nextFullYear(): void {
    this.startFullYear.setFullYear(this.startFullYear.getFullYear() + 1);
    this.endFullYear.setFullYear(this.endFullYear.getFullYear() + 1);

    this.setYear();
  }
}

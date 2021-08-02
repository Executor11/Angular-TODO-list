import { Component, OnInit } from '@angular/core';
import { DateManageService } from 'src/app/shared/date-manage.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss', '../task-date.component.scss'],
})
export class YearComponent implements OnInit {
  startFullYear: Date = new Date();
  endFullYear: Date = new Date();
  constructor(private dateManageService: DateManageService) {
    this.startFullYear.setFullYear(this.endFullYear.getFullYear());
    this.endFullYear.setFullYear(this.endFullYear.getFullYear() + 1);
  }

  ngOnInit() {
    this.dateManageService.setWeekRanges(this.startFullYear, this.endFullYear);
  }

  prevFullYear(): void {
    this.startFullYear.setFullYear(this.startFullYear.getFullYear() - 1);
    this.endFullYear.setFullYear(this.endFullYear.getFullYear() - 1);

    this.startFullYear = new Date(this.startFullYear);
    this.endFullYear = new Date(this.endFullYear);

    this.dateManageService.setWeekRanges(this.startFullYear, this.endFullYear);
  }

  nextFullYear(): void {
    this.startFullYear.setFullYear(this.startFullYear.getFullYear() + 1);
    this.endFullYear.setFullYear(this.endFullYear.getFullYear() + 1);

    this.startFullYear = new Date(this.startFullYear);
    this.endFullYear = new Date(this.endFullYear);

    this.dateManageService.setWeekRanges(this.startFullYear, this.endFullYear);
  }
}

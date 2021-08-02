import { Component, OnInit } from '@angular/core';
import { DateManageService } from 'src/app/shared/date-manage.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss', '../task-date.component.scss'],
})
export class WeekComponent implements OnInit {
  startWeek: Date = new Date();
  endWeek: Date = new Date();
  constructor(private dateManageService: DateManageService) {
    this.startWeek.setDate(this.endWeek.getDate());
    this.endWeek.setDate(this.endWeek.getDate() + 7);
  }

  ngOnInit() {
    this.dateManageService.setWeekRanges(this.startWeek, this.endWeek);
  }

  prevWeek(): void {
    this.startWeek.setDate(this.startWeek.getDate() - 7);
    this.endWeek.setDate(this.endWeek.getDate() - 7);

    this.startWeek = new Date(this.startWeek);
    this.endWeek = new Date(this.endWeek);

    this.dateManageService.setWeekRanges(this.startWeek, this.endWeek);
  }

  nextWeek(): void {
    this.startWeek.setDate(this.startWeek.getDate() + 7);
    this.endWeek.setDate(this.endWeek.getDate() + 7);

    this.startWeek = new Date(this.startWeek);
    this.endWeek = new Date(this.endWeek);

    this.dateManageService.setWeekRanges(this.startWeek, this.endWeek);
  }
}

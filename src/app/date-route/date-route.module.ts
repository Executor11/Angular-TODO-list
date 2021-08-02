import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskDateComponent } from '../task-date/task-date.component';
import { WeekComponent } from '../task-date/week/week.component';
import { MonthComponent } from '../task-date/month/month.component';
import { YearComponent } from '../task-date/year/year.component';

const routes: Routes = [
  {
    path: '',
    component: TaskDateComponent,
  },
  {
    path: 'week',
    component: WeekComponent,
  },
  {
    path: 'month',
    component: MonthComponent,
  },
  {
    path: 'year',
    component: YearComponent,
  },
];

@NgModule({
  declarations: [WeekComponent, MonthComponent, YearComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DateRouteModule {}

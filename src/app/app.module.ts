import { PinnedTasksComponent } from './task-container/pinned-tasks/pinned-tasks.component';
import { DefaultTasksComponent } from './task-container/default-tasks/default-tasks.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task-container/task/task.component';
import { IsPinnedPipe } from './pipes/is-pinned.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import { DateRouteComponent } from './date-route/date-route.component';
import { TaskDateComponent } from './task-date/task-date.component';
import { DateRouteModule } from './date-route/date-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaskDateComponent,
    NewTaskFormComponent,
    TaskContainerComponent,
    DefaultTasksComponent,
    PinnedTasksComponent,
    TaskComponent,
    DateRouteComponent,
    IsPinnedPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClickOutsideModule,
    DateRouteModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

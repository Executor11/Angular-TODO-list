import { PinnedTasksComponent } from './task-container/pinned-tasks/pinned-tasks.component';
import { DefaultTasksComponent } from './task-container/default-tasks/default-tasks.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TaskDateComponent } from './task-date/task-date.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskContainerComponent } from './task-container/task-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaskDateComponent,
    NewTaskFormComponent,
    TaskContainerComponent,
    DefaultTasksComponent,
    PinnedTasksComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

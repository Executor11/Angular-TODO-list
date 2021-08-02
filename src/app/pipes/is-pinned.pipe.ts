import { Task } from 'src/app/shared/task.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPinned',
})
export class IsPinnedPipe implements PipeTransform {
  transform(value: Task[], isPinned: boolean = false): Task[] {
    //filter tasks by value default is false
    return value.filter((task) => (isPinned ? task.isPinned : !task.isPinned));
  }
}

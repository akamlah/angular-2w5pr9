import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()

  onDelete() {
    console.log('deleting task: ');
    console.log(this.task);

    this.onDeleteTask.emit(this.task);
  }

}
 
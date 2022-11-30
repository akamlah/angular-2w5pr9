import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service' 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  // use service: add it as a provider in a constructor:
  // this.task.service...
  constructor(private taskService: TaskService) {}

  // ususlly you would do that with observables and async bcs data would come from server
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}

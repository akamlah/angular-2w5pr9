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

  ngOnInit(): void {    
    // usually you would do that with observables and async bcs data would come from server
    // this.tasks = this.taskService.getTasks();
  
    // use an observable-> you have to SUBSCRIBE to it and watch it.
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    // last "tasks" is the one that the observable returns
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id ! === task.id))
    );
  }

}

import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS); // wrap TASKS in of to make it an observable
    // // angular http client returns an observable automatically -> no need for this
    // return (tasks);
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>  {
    const idUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(idUrl);
  }

}

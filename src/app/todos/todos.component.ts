import { Component,inject,OnInit,signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  // inject TodosService, which is a service that stores and manages the list of todos
  todoService: TodosService = inject(TodosService);

  // create a signal that will hold the list of todos
  // the signal is initialized with an empty array
  todoItems=signal<Array<Todo>>([]);

  // this method is called when the component is initialized
  ngOnInit():void{
    // log the list of todos to the console
    // console.log(this.todoService.todoItems);

    // set the value of the todoItems signal to the list of todos stored in the service
    // this.todoItems.set(this.todoService.todoItems);

    // get data from api
    this.todoService.getTodosFromApi()
    .pipe( 
      catchError((error)=>{console.log(error);return []})
    ).subscribe((todos)=>{
      this.todoItems.set(todos);
    });
  }
}


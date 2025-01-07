import { Injectable } from '@angular/core';
import {Todo} from '../model/todo.type'

@Injectable({
  providedIn: 'root' // service available to all components
})
export class TodosService {
  todoItems:Array<Todo>=[
    {
      id:0,
      title:"Learn Angular",
      userId:1,
      completed:false
    },
    {
      id:1,
      title:"Learn AngularJS",
      userId:1,
      completed:false
    }
  ]
  
  constructor() { }
}

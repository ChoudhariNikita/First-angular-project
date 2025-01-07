import { inject, Injectable } from '@angular/core';
import {Todo} from '../model/todo.type'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root' // service available to all components
})
export class TodosService {
  http=inject(HttpClient);
  // todoItems:Array<Todo>=[
  //   {
  //     id:0,
  //     title:"Learn Angular",
  //     userId:1,
  //     completed:false
  //   },
  //   {
  //     id:1,
  //     title:"Learn AngularJS",
  //     userId:1,
  //     completed:false
  //   }
  // ]
  
  getTodosFromApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
  
}

import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  SetTodoList(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  GetTodoList(): Todo[] {
    return JSON.parse(localStorage.getItem('todos') || 'null');
  }
}

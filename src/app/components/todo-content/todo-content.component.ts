import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css'],
})
export class TodoContentComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {
    this.todos = todoService.GetTodoList() ? todoService.GetTodoList() : [];
  }

  ngOnInit(): void {}

  SetTodoList(todos: Todo[]) {
    this.todos = todos;
    this.todoService.SetTodoList(this.todos);
  }
}

import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoBodyToggle = false;
  complateDate: Date;

  @Input() todos: Todo[];
  @Input() todo: Todo;
  @Output() SetTodoList = new EventEmitter<Todo[]>();

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}
  toggleTodoBody() {
    this.todoBodyToggle = !this.todoBodyToggle;
  }

  complateTodo(complatedTodo: Todo) {
    this.todos.map((todo) => {
      if (todo.id == complatedTodo.id) {
        todo.complated = !todo.complated;
        todo.complatedDate = todo.complated
          ? this.datePipe.transform(Date.now(), 'hh:mm - EEEE, MMMM d') ||
            'null'
          : '';
        this.SetTodoList.emit(this.todos);
      }
    });
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => {
      return item.id != todo.id;
    });

    this.SetTodoList.emit(this.todos);
  }
}

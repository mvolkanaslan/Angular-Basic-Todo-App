import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faSyncAlt = faSyncAlt;
  today = new Date();

  @Input() todos: Todo[];
  @Output() SetTodoList = new EventEmitter<Todo[]>();

  constructor() {}

  ngOnInit(): void {}

  clearTodoList() {
    this.todos = [];
    this.SetTodoList.emit(this.todos);
  }
}

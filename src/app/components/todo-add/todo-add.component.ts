import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  todoForm: FormGroup;
  @Input() todos: Todo[];
  @Output() SetTodoList = new EventEmitter<Todo[]>();

  ngOnInit(): void {
    this.createTodoForm();
  }

  createTodoForm() {
    this.todoForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      createdDate: [''],
      complatedDate: [''],
      complated: [''],
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      this.todoForm.patchValue({
        id: uuidv4(),
        complated: false,
        createdDate: this.datePipe.transform(
          Date.now(),
          'hh:mm - EEEE, MMMM d'
        ),
      });
      let todoToAdd: Todo = Object.assign({}, this.todoForm.value);
      this.todos.unshift(todoToAdd);
      this.SetTodoList.emit(this.todos);
      this.todoForm.reset();
    } else {
      this.toastrService.warning('Enter a ToDo Title !');
    }
  }
}

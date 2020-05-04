import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  isHovered = false;
  isEditing = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onClickCheckbox() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.todoService.updateTodo(this.todo);
  }

}

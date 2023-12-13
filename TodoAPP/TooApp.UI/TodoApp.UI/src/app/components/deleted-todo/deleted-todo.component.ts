import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.css']
})
export class DeletedTodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.getAllDeletedTodos();
  }

  getAllDeletedTodos() {
    this.todoservice.getAllDeletedTodos()
      .subscribe({
        next: (res) => {
          this.todos = res;
        }
      });
  }

  undoDeletedTodo(id: string, todo: Todo) {
    this.todoservice.undoDeleteTodo(id, todo)
      .subscribe({
        next: (res) => {
          this.getAllDeletedTodos();
        }
      });
  }
}


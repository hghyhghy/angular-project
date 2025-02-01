
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule
import { Todo } from '../../Todo';
import { TodoItemsComponent } from "../todo-items/todo-items.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] = [];
  localitem: string = "";

  constructor() {
    this.localitem = localStorage.getItem('todos') ?? "";
    if (this.localitem === "") {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addtodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggletodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
      this.todos[index].active = !this.todos[index].active;  // Toggle active state
      localStorage.setItem('todos', JSON.stringify(this.todos));
    
  }
}

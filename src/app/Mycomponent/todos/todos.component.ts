import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule
import { Todo } from '../../Todo';
import { TodoItemsComponent } from "../todo-items/todo-items.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent], // ✅ Add CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      { sno: 1, title: "This is title", description: "Description", active: true },
      { sno: 2, title: "This is title2", description: "Description2", active: true },
      { sno: 3, title: "This is title3", description: "Description3", active: true }
    ];
  }
}


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./Mycomponent/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  constructor(){

    setTimeout(() => {
      this.title="changed todo-list"
    }, 2000);
  }
}

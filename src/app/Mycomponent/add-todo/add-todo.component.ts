import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  @Output() todoadd:EventEmitter<Todo>=new EventEmitter();

  onSubmit(){

    const todo = {

      sno:8,
      title:this.title,
      description:this.description,
      active:true
    }

    this.todoadd.emit(todo)
  }

}


import { Component,Input, Output,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {

  @Input() todo:Todo={sno:0,title:'',description:'',active:true};

  @Output() tododelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todocheckbox:EventEmitter<Todo>=new EventEmitter();

  onClick(todo:Todo){

    this.tododelete.emit(todo)

  }

  oncheckboxclick(todo:Todo){
 
    this.todocheckbox.emit(todo)
  }
}

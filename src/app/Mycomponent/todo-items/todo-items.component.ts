import { Component,Input} from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo:Todo={sno:0,title:'',description:'',active:true};
}

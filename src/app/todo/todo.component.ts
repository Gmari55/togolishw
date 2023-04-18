import { Component } from '@angular/core';
import { Itodoitem,  TODO_MOCK } from '../model/todolistitem';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todolist:Itodoitem[]=TODO_MOCK;
}

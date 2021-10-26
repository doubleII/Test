import { Component, OnInit } from '@angular/core';
// project
import { IColumns } from 'src/app/models/columns';
import { ITodoList } from 'src/app/models/todo-list';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  public cols: IColumns[];
  public todos: ITodoList[];

  constructor(private todoService: TodosService) { 
    this.cols = [];
    this.todos = [];
  }

  ngOnInit(): void {
    console.log('ngOnInit my table');
    this.todoService.getTodoList()
    .subscribe((data) => {this.todos = data;
    }, 
    (error) => { console.log(error);},
    () => { console.log('got list', this.todos);});

    this.cols = [
        { field: 'userId', header: 'User', editable: false },
        { field: 'id', header: 'ID', editable: false},
        { field: 'title', header: 'Title', editable: true },
        { field: 'completed', header: 'Completed', editable: true }
    ];
  }

  onEdit(event: any) : void {
    console.log(event);
  }
}

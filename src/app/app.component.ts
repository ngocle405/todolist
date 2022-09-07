import { Component, Injector, OnInit } from '@angular/core';
import { TodolistService } from './service/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(injector: Injector, private service: TodolistService) {}
  ngOnInit(): void {
    this.search();
  }
  title = 'todoList';
  itemTodo: any;
  search() {
    this.service.search().subscribe({
      next: (data) => {
        this.itemTodo = data?.data;
        console.log(this.itemTodo);
      },
    });
  }
}

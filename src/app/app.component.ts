import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodolistService } from './service/todolist.service';
import * as moment from 'moment';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    injector: Injector,
    private service: TodolistService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.search();
    this.listPrioty;
  }
  listPrioty = [
    { value: 'nomal', name: 'nomal' },
    { value: 'height', name: 'height' },
  ];
  form = this.fb!.group({
    code: [''],
    id: [''],
    title: ['', Validators.required],
    description: [''],
    dueDate: [''],
    piority: [''],
  });
  title = 'todoList';
  itemTodo: any = [];
  search() {
    this.service.search().subscribe({
      next: (data) => {
        this.itemTodo = data?.data;
        console.log(this.itemTodo);
      },
    });
  }
  check?: boolean;
  viewDetail(data: any, iCheck?: boolean) {
    data.dueDate = new Date(data.dueDate);
    data.dueDate = moment(data.dueDate).format('DD/MM/yyyy');
    this.form.patchValue(data);
    this.check = iCheck;
  }
  save() {
    this.itemTodo.push(this.form.value);
    console.log(this.itemTodo.push(this.form.value));

    this.itemTodo = [...this.itemTodo];
    this.search();
    // this.itemTodo.push(this.form.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     this.search();
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }
}

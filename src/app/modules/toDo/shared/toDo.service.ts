import { MessageService } from "./../../../shared/services/message.service";
import { GlobalService } from "./../../../shared/services/global.service";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { TODoList } from "./toDo.model";

import { map } from "rxjs/operators";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { catchError, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ToDoService {
  // todo: TODoList[] = [
  //   {
  //     id: "1",
  //     todo_name: "Developer Survey",
  //     todo_categories: "Personal",
  //     todo_labels: "ON HOLD",
  //     todo_description: "This is the first post's content",
  //     todo_date: "12 / 27 / 2018"
  //   },
  //   {
  //     id: "2",
  //     todo_name: "Designer Survey",
  //     todo_categories: "Store",
  //     todo_labels: "PROCESSED",
  //     todo_description: "This is the first post's content",
  //     todo_date: "12 / 27 / 2018"
  //   }
  // ];
  // private posts= [];

  private todoUpdated = new Subject<TODoList[]>();
  private todo: TODoList[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _globalService: GlobalService,
    private messageService: MessageService
  ) {}

  getTodos(): any {
    this.http
      .get<{ message: string; todo: any }>("http://localhost:3000/api/todo")
      .pipe(
        map(todoData => {
          return todoData.todo.map(todo => {
            return {
              todo_date: todo.todo_date,
              todo_name: todo.todo_name,
              todo_description: todo.todo_description,
              todo_categories: todo.todo_categories,
              todo_labels: todo.todo_labels,
              id: todo._id
            };
          });
        })
      )
      .subscribe(transformedToDo => {
        this.todo = transformedToDo;
        this.todoUpdated.next([...this.todo]);
      });
  }

  // getTodoAll() {
  //   return this.http
  //     .get<{ message: string; todo: any }>("http://localhost:3000/api/todo")
  //     .pipe(
  //       map(todoData => {
  //         return todoData.todo.map(todo => {
  //           return {
  //             todo_date: todo.todo_date,
  //             todo_name: todo.todo_name,
  //             todo_description: todo.todo_description,
  //             todo_categories: todo.todo_categories,
  //             todo_labels: todo.todo_labels
  //           };
  //         });
  //       })
  //     );
  // }

  getTodoUpdateListener() {
    return this.todoUpdated.asObservable();
  }

  getTodo(id: string): Observable<TODoList> {
    return this.http.get<TODoList>("http://localhost:3000/api/todo/" + id);
  }

  addTodo(todo: TODoList) {
    return this.http
      .post<{ message: string; todoId: string }>(
        "http://localhost:3000/api/todo",
        todo
      )
      .subscribe(responseData => {
        const id = responseData.todoId;
        todo.id = id;
        this.todo.push(todo);
        this.todoUpdated.next([...this.todo]);
        this._globalService.dataBusChanged("isloaded", false);
        //
        setTimeout(() => {
          this._globalService.dataBusChanged("closeModal", false);
        }, 2000);
        setTimeout(() => {
          this.log(
            `( ${todo.todo_name} )===> ${responseData.message} of ( ${
              responseData.todoId
            } ) ID`,
            true
          );
        }, 2300);
      });
  }

  updateTodo(todo: TODoList, todoId) {
    const product: TODoList = {
      id: todoId,
      todo_date: todo.todo_date,
      todo_name: todo.todo_name,
      todo_description: todo.todo_description,
      todo_categories: todo.todo_categories,
      todo_labels: todo.todo_labels
    };
    this.http
      .put<{ message: string }>(
        "http://localhost:3000/api/todo/" + todoId,
        product
      )
      .subscribe(response => {
        const updatedProducts = [...this.todo];
        const x = product.todo_name;
        // console.log(todo);
        const oldProductIndex = updatedProducts.findIndex(p => p.id === todoId);
        updatedProducts[oldProductIndex] = product;
        this.todo = updatedProducts;

        this.todoUpdated.next([...this.todo]);
        this._globalService.dataBusChanged("isloaded", false);
        setTimeout(() => {
          this._globalService.dataBusChanged("closeModal", false);
        }, 2000);
        setTimeout(() => {
          this.log(`( ${x} )===> ${response.message} `, true);
        }, 2300);
      });
  }

  deleteTodo(todoId: string) {
    this.http
      .delete("http://localhost:3000/api/todo/" + todoId)
      .subscribe(() => {
        const updatedProducts = this.todo.filter(
          product => product.id !== todoId
        );
        this.todo = updatedProducts;
        this.todoUpdated.next([...this.todo]);
      });
  }

  log(message: string, type: boolean) {
    this.messageService.add(message, type);
    setTimeout(() => {
      this.messageService.clear();
    }, 10000);
  }
}

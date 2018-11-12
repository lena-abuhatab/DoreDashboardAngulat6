import { TODoList } from "./../../../shared/toDo.model";
import { ToDoService } from "./../../../shared/toDo.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-to-do-edit",
  templateUrl: "./to-do-edit.component.html",
  styleUrls: ["./to-do-edit.component.css"]
})
export class ToDoEditComponent implements OnInit {
  students: TODoList[];
  filteredStudents: TODoList[];

  // basic info
  Sex: string;
  // child info
  todo_categories: string;
  todo_labels: string;

  // filter by value
  filters = {};

  constructor(public _toDoService: ToDoService) {}

  ngOnInit() {
    /// get all students
    // this.students = this.getStudents();

    this._toDoService.getTodos();
    this._toDoService
      .getTodoUpdateListener()
      .subscribe((params: TODoList[]) => {
        this.students = params;
        this.setFilters();
      });
  }

  private setFilters() {
    this.filteredStudents = _.filter(this.students, _.conforms(this.filters));
  }

  filterMatch(property: string, value: any) {
    console.log(property + value);
    this.filters[property] = i => i === value;
    this.setFilters();
  }

  // filterMatchSub(property: string, childProperty: string, value: any) {
  //   let existing = val => true;
  //   if (this.filters[property]) {
  //     existing = this.filters[property];
  //   }
  //   this.filters[property] = val =>
  //     val.find(child => child[childProperty] === value) && existing(val);
  //   this.setFilters();
  // }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property];
    this[property] = null;
    this.todo_categories = null;
    this.todo_labels = null;
    this.setFilters();
  }

  // private getStudents() {
  //   return JSON.parse(`
  //   [
  //     {
  //         "StudentId": 1,
  //         "StudentName": "Student1",
  //         "Sex":"M",
  //         "Programs": [
  //             {
  //                 "StudentId": 1,
  //                 "ProgramName": "Java",
  //                 "ProgramCategory": "Engineering",
  //                 "ProgramStatus": "Full Time"
  //             },
  //             {
  //                 "StudentId": 1,
  //                 "ProgramName": "HR Management 2",
  //                 "ProgramCategory": "HR",
  //                 "ProgramStatus": "Part Time"
  //             },
  //             {
  //                 "StudentId": 1,
  //                 "ProgramName": "Accounting 1",
  //                 "ProgramCategory": "Finance",
  //                 "ProgramStatus": "Full Time"
  //             }
  //         ]
  //      },
  //     {
  //         "StudentId": 2,
  //         "StudentName": "Student2",
  //         "Sex":"F",
  //         "Programs": [
  //             {
  //                 "StudentId": 2,
  //                 "ProgramName": "HR Management 1",
  //                 "ProgramCategory": "HR",
  //                 "ProgramStatus": "Part Time"
  //             },
  //             {
  //                 "StudentId": 2,
  //                 "ProgramName": "Accounting 3",
  //                 "ProgramCategory": "Finance",
  //                 "ProgramStatus": "Full Time"
  //             }
  //         ]
  //      },
  //     {
  //         "StudentId": 3,
  //         "StudentName": "Student3",
  //         "Sex":"F",
  //         "Programs": [
  //             {
  //                 "StudentId": 3,
  //                 "ProgramName": "Java 3",
  //                 "ProgramCategory": "Engineering",
  //                 "ProgramStatus": "Full Time"
  //             }
  //         ]
  //      },
  //     {
  //         "StudentId": 4,
  //         "StudentName": "Student4",
  //         "Sex":"M",
  //         "Programs": [
  //             {
  //                 "StudentId": 4,
  //                 "ProgramName": "Java 2",
  //                 "ProgramCategory": "Engineering",
  //                 "ProgramStatus": "Full Time"
  //             },
  //             {
  //                 "StudentId": 4,
  //                 "ProgramName": "Accounting 2",
  //                 "ProgramCategory": "Finance",
  //                 "ProgramStatus": "Part Time"
  //             }
  //         ]
  //      },
  //      {
  //         "StudentId": 5,
  //         "StudentName": "Student5",
  //         "Sex":"M",
  //         "Programs": [
  //             {
  //                 "StudentId": 5,
  //                 "ProgramName": "JavaScript",
  //                 "ProgramCategory": "Engineering",
  //                 "ProgramStatus": "Part Time"
  //             },
  //             {
  //                 "StudentId": 5,
  //                 "ProgramName": "HR Management 5",
  //                 "ProgramCategory": "HR",
  //                 "ProgramStatus": "Full Time"
  //             }
  //         ]
  //      }
  // ]
  //   `);
  // }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeDeatil(){
    return [
      {"id": 1, "name": "Employee 1", "age": "age 1", "salary": "salary 1"},
      {"id": 2, "name": "Employee 2", "age": "age 2", "salary": "salary 2"},
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee }  from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  dataFromChild: Employee;
  employees: Employee[];

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee }  from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employeeToDisplay: Employee;
  employees: Employee[];
  //to track employee index to be showne in nextEmployee button click
  private arrayIndex = 1;

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if(this.arrayIndex < this.employees.length){
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }
    else{
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex=1;
    }
  }
}

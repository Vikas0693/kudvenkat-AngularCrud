import { Component, OnInit } from '@angular/core';
import { Employee }  from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;
  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeId: number){
    this._router.navigate(['/employees',employeeId]);
  }

  changeName(){
    this.employees[0].name="jorddan";
  }

  changeEmployeesObjectReference(){
    const newEmployee : Employee[] = Object.assign([], this.employees);
    newEmployee[0].name = 'jordan';
    this.employees = newEmployee;
  }
}

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
  filteredEmployees: Employee[];
  private _searchTerm: string;
  public get searchTerm(): string {
    return this._searchTerm;
  }
  public set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchParam: string): Employee[]{
      return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchParam)!=-1);
  }
  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  onClick(employeeId: number){
    this._router.navigate(['/employees',employeeId],{
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue'}
    });
  }

  changeName(){
    this.employees[0].name="jordan";
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }

  changeEmployeesObjectReference(){
    const newEmployee : Employee[] = Object.assign([], this.employees);
    newEmployee[0].name = 'jordan';
    //this.employees gets new object reference
    this.employees = newEmployee;
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }

  onMouseMove(){}

}

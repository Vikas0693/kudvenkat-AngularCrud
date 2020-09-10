import { Component, OnInit } from '@angular/core';
import { Employee }  from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    //reading pre-fetched data sent by resolver which is added in routes
    //so now we no longer need observable in ngOnInit lets remove that
    this.employees = _activatedRoute.snapshot.data['employeesList'];
    if(this._activatedRoute.snapshot.queryParamMap.has('searchTerm')){
      this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm')
    }
    else{
      //since here page gets loaded just like if we have came for first time 
      this.filteredEmployees = this.employees;
    }
  }

  ngOnInit(): void {
      

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

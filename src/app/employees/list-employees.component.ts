import { Component, OnInit } from '@angular/core';
import { Employee }  from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employee-list.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee[];
  filteredEmployees: Employee[];
  error: string;
  private _searchTerm: string;
  public get searchTerm(): string {
    return this._searchTerm;
  }

  public set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  //returns new filtered array
  filterEmployees(searchParam: string): Employee[]{
      return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchParam)!=-1);
  }

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    //reading pre-fetched data sent by resolver which is added in routes
    //so now we no longer need observable in ngOnInit lets remove that
    const resolvedData: Employee[] | string = _activatedRoute.snapshot.data['employeesList'];
    //resolver successfully fetches employees data then it returns array else error
    if(Array.isArray(resolvedData)){
      this.employees = resolvedData;
    }else{
      this.error = resolvedData;
    }

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

  onDeleteInDisplayComponent(event: number){
    console.log(`emit event called to delete employee ${event}`);
    const i = this.filteredEmployees.findIndex(e => e.id === event);
    if( i!==-1){
      this.filteredEmployees.splice(i,1);
    }
  }
}

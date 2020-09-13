import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTermInDisplayComponent: string;
  //since we want to send id to list component we typecast eventemitter to number
  @Output() notifyDeleteToListComponent: EventEmitter<number> = new EventEmitter();
  selectedEmployeeId: number;
  confirmDelete: false;
  panelExpanded = true;


  constructor(private _route: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee(){
    //we cannot use this.selectedEmployeeId to pass as id because this variable get its id from url
    //which on first time load will not work
    this._router.navigate(['/employees',this.employee.id],{
        queryParams: { 'searchTerm': this.searchTermInDisplayComponent 
      }
    });
  }
  editEmployee(){
    this._router.navigate(['/edit',this.employee.id]);
  }
  deleteEmployee(){
    //here we are deleting employee from employees array of employee service but in listcomponent we use filteredEmployees to dispaly
    //fileredEmployees gets new reference of array when user search name and then delete hence just deleting from employees array in employeeservice is not enough
    //so we are deleting from filteredEmployees array using emiiter
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      ()=>{
        console.log(`Employee deleted with id ${this.employee.id}`);this.notifyDeleteToListComponent.emit(this.employee.id); 
      },
      (error: any)=>console.log('DisplayComponent.deleteEmployee :Error when deleting employee',error)
    );
    
  }
}

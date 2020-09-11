import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTermInDisplayComponent: string;
  selectedEmployeeId: number;


  constructor(private _route: ActivatedRoute, private _router: Router) { }
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
}

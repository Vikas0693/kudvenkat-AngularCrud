import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  //to change panel heding color when we click back to list in employee-details
  @Input() hasJustViewed: boolean;
  //to update panel-heading for edit or create
  @Input() title: string;
  //to hide and show accordion and allow parent component to set its value which we will set manually as true
  @Input() isHidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

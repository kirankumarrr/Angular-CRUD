// import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
// working on property setter
//import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Employee } from "../../models/employee.model"
import { ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
// export class DisplayEmployeesComponent implements OnInit, OnChanges {
// export class DisplayEmployeesComponent implements OnInit{
//   // @Input() employee: Employee;
//   // constructor() { }

//   // ngOnInit() {
//   // }
//   // ngOnChanges(changes: SimpleChanges) {
//   //  // console.log(changes)
//   //   const PreviousEmployeeName = <Employee>  changes.employee.previousValue; 
//   //   const CurrentEmployeeName = <Employee>  changes.employee.currentValue;
//   //   console.log("PreviousEmployeeName " + (PreviousEmployeeName ? PreviousEmployeeName.name : "NULL"));
//   //   console.log(`CurrentEmployeeName ${CurrentEmployeeName.name}`);
//   // }

//   private _employee : Employee;
//   @Input() 
//   set employee(val: Employee){
//     console.log("Previous Name " +(this._employee ? this._employee.name : "NULL"));
//     console.log("Current  Name " + val.name);
//     this._employee = val;
//   }
//   get employee () : Employee {
//     return this._employee
//   }
//   constructor() { }

//   ngOnInit() {
//   }
  
// }



export class DisplayEmployeesComponent implements OnInit{
  @Input() employee: Employee;
  @Output() notify = new EventEmitter<string>();
 
  private selectedEmpolyeeId : number;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
     this.selectedEmpolyeeId = +this._route.snapshot.paramMap.get('id');
  }
   ChildClickEventListener (name){
     this.notify.emit(name);
   }
   getNameAndGender():string{
     return this.employee.name+" "+this.employee.gender;
   }
}
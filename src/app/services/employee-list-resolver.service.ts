import { Injectable } from '@angular/core';
import { Employee } from "../models/employee.models";
import { Observable, of } from 'rxjs';
import { ListEmployeeService } from './list-employee.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]>{
  constructor(private _employeeService: ListEmployeeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this._employeeService.getEmployees();
  }

} 
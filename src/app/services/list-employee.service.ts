import { Injectable } from '@angular/core';
import { Employee } from "../models/employee.models";
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay';
@Injectable()
// Dependency injection is the ability to add the functionality of components at runtime. Let’s take a look at an example and the steps used to implement dependency injection.
// Its required only if ListEmployeeService has injected dependency
//Like we goging to inject angular http services to this ListEmployeeService to issue a call to remote web service to get the data at that point we required this but angular team recommended to make consistency

export class ListEmployeeService {
  constructor() { }
  emp: Employee;
  private listEmployee: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '1',
      isActive: true,
      photoPath: 'https://2.bp.blogspot.com/-xG8wtGFhwd4/WjFWoJpjSPI/AAAAAAAAns0/-UCndX6XnlEsTYS-LeZyXa2_DsgQQlkQgCLcBGAs/s1600/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'https://2.bp.blogspot.com/-VWh7J1pgrGo/WjFW-lYK-aI/AAAAAAAAns4/cjh5i2X7vhMhboHwirOlp-QLD3lDOFXXACLcBGAs/s1600/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'https://2.bp.blogspot.com/-L8hccI1RetU/WjFXFp717LI/AAAAAAAAns8/zmoWhYWycR0SNT_u7Fxl5e73hEYsTMVIgCLcBGAs/s1600/john.png'
    },
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployee).delay(2000)
    // (this.listEmployee);
  }
  getEmployee(id: number): Employee[] {
    return this.listEmployee.find(e => e.id === id);
  }
  saveEmployees(newemployee: Employee) {
    this.listEmployee.push(newemployee);
  }

}
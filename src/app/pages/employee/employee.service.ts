/**
 * @author Kalanka
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Employee } from 'src/app/shared/models/employee';

const EMPLOYEE_URL = "http://127.0.0.1:4003/api/v1/employees";
const EMPLOYEE_SALARY_URL = "http://127.0.0.1:4003/api/v1/salaries";
@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getAllEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Array<Employee>>(EMPLOYEE_URL).pipe(take(1));
  } // getAllEmployeeDetails()

  public getEmployeeBYId(id: string): Observable<any> {
    return this.http.get(`${EMPLOYEE_URL}/${id}`).pipe(take(1));
  } // getCampaignReportById()

  public getSalaryByEmployeeType(type: string): Observable<any> {
    console.log(type);
    return this.http.get(`${EMPLOYEE_SALARY_URL}/${type}`).pipe(take(1));
  } // getSalaryByEmployeeType()
} // class

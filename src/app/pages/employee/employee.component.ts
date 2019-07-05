/**
 * @author kalanka
 */
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Emittable, Emitter } from "@ngxs-labs/emitter";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Employee } from "src/app/shared/models/employee";
import { EmployeeState } from "src/app/shared/state/employee.state";
import { EmployeeService } from "./employee.service";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  public selectedEmployeeName: string;
  public type: string;
  public employeesList$: Observable<Employee[]>;
  @Emitter(EmployeeState.setEmployee)
  private EmployeeType: Emittable<Employee>;

  @Select(EmployeeState.employee)
  public selectedEmployee$: Observable<Employee>;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      employee: [null],
      type: [null]
    });
  }

  public ngOnInit() {
    this.selectedEmployeeName = "Select employee";
    this.employeesList$ = this.employeeService.getAllEmployeeDetails();
    // this.employeesList$ = this.employeeService.getAllEmployeeDetails().subscribe(
    //   // (res: Employee) => {
    //   //   console.log(res);
       
    //   // },
    //   // (err: HttpErrorResponse) => {
    //   //   console.log(err);
    //   // }
    // );
    this.selectedEmployee$.pipe(
      take(1),
      map(m => {
        this.type = m.type;
      })
    );
  } // ngOnInit

  public selectedEmployee(value: any) {
    this.selectedEmployeeName = value;
    this.employeeService.getEmployeeBYId(value).subscribe(
      (res: Employee) => {
        this.type = res[0].type;
        console.log(this.type);

        console.log(res);
        this.EmployeeType.emit(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  } // selectedEmployee()
  /**
   * @description Calculate salary
   */
  public calculateSalary() {
    console.log(this.type);
    this.employeeService.getSalaryByEmployeeType(this.type).subscribe(
      (res: number) => {
        console.log(res);
        alert("salary: " + res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  } // calculateSalary()
} // class

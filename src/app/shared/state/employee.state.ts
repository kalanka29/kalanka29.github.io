/**
 * @author Kalanka
 */
import { HttpClient } from "@angular/common/http";
import { EmitterAction, Receiver } from "@ngxs-labs/emitter";
import { Selector, State, StateContext } from "@ngxs/store";
import { Employee } from "src/app/shared/models/employee";

interface EmployeeStateModel {
  employee?: Employee;
}
@State<EmployeeStateModel>({
  name: "employee"
})
export class EmployeeState {
  constructor(private http: HttpClient) {}
  /**
   * Selectors
   */
  @Selector()
  static employee(state: EmployeeStateModel): Employee {
    return state.employee;
  }
  /**
   * Recievers
   */
  @Receiver()
  public static setEmployee(
    { patchState }: StateContext<EmployeeStateModel>,
    { payload }: EmitterAction<Employee>
  ) {
    patchState({ employee: payload });
  }
} // class

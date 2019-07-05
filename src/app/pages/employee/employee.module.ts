/**
 * @author Kalanka
 */
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatSelectModule } from "@angular/material";
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeComponent } from "./employee.component";
import { EmployeeService } from "./employee.service";
@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxPaginationModule,
    // Mat
    MatSelectModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule {}

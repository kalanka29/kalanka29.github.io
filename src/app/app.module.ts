/**
 * @author Kalanka
 */
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsEmitPluginModule } from "@ngxs-labs/emitter";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeState } from "src/app/shared/state/employee.state";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeService } from "./pages/employee/employee.service";
import { ApiInterceptorService } from "./shared/service/interceptors/api-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([EmployeeState]),
    NgxsEmitPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxPaginationModule
  ],
  bootstrap: [AppComponent],
  providers: [
    EmployeeService,
    {
      provide: "API",
      useValue: environment.api_base_url
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}

/**
 * @author Kalanka
 */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  constructor(@Inject("API") private baseUrl: string) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("here");
    console.log(this.baseUrl);

    const apiReq = req.clone({
      url: `${this.baseUrl}${req.url}`
    });
    return next.handle(apiReq);
  }
} // class

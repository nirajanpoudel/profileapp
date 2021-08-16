import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from "@angular/common/http";


@Injectable()

export class TokenInterceptor implements HttpInterceptor {
 constructor() {}
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let request =req.clone({
            headers:new HttpHeaders().append('Authorization','Bearer '+localStorage.getItem('token'))          
        });
        return next.handle(request);   
  }    
}
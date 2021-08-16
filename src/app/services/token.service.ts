import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  

  constructor( ) { }
  set(token:any) {
    localStorage.setItem('token', token);
  }
  get():any {
    return localStorage.getItem('token');
  }

  remove():void {
   localStorage.removeItem('token');
  }

}

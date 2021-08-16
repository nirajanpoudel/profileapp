import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:any){
   return this.http.post<any>(environment.baseUrl+'auth', data)
  }
  getUser(){
    return this.http.get(environment.baseUrl+'user').pipe(map(data=>{
      return data['data'];
    }))
  }
  
}
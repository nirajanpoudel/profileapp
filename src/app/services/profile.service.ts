import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    save(data:any):Observable<any>{
      
      data.dob = data.dob.year+'-'+data.dob.month+'-'+data.dob.day;
      // console.warn(data);
     return this.http.post<any>(environment.baseUrl+'profile', data)
    }

    list(): Observable<Profile[]>{
        return this.http.get<Profile[]>(environment.baseUrl+'profiles');
    }

    
  
}

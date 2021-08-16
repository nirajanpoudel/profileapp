import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      console.log(data);
      data.dob = data.dob.year+'-'+data.dob.month+'-'+data.dob.day;
      var formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      
      formData.append("gender", data.gender);
      formData.append("nationality", data.nationality);
      formData.append("dob", data.dob);
      formData.append("contactMode", data.contactMode);
      formData.append("educationBackgrounds", JSON.stringify(data.educationBackgrounds));
      formData.append("avatar", data.avatar);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      
      // console.warn(data);
     return this.http.post<any>(environment.baseUrl+'profile', formData,{
      headers: headers
     })
    }

    list(): Observable<Profile[]>{
        return this.http.get<Profile[]>(environment.baseUrl+'profiles');
    }

    
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://192.168.0.4/api/";
  constructor(private http: HttpClient) { }

  login(value) {
    // var language =localStorage.getItem('language');
      
      return this.http.post(this.url+'login',value);
 
 
    
   }


}

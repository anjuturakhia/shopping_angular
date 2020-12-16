import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = "http://192.168.0.4/api/";
  constructor(private http: HttpClient, public token:TokenService,) { }

  reqheadermain = new HttpHeaders({'Authorization':'Bearer '+this.token.getToken()});

  getCompanylist(value){

    var lang = {lang :value}
    
    return this.http.post(this.url+'getcompany',lang,{headers:this.reqheadermain});

  }

  savecontact(value){

    return this.http.post(this.url+'savecontact',value,{headers:this.reqheadermain});

  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) { }

  getProducts(lang) {
   // var language =localStorage.getItem('language');
    if(lang == 'en'){
      return this.http.get('./assets/i18n/en.json');
    }

    if(lang == 'hi'){
      return this.http.get('./assets/i18n/hi.json');
    }


   
  }


  

  
}

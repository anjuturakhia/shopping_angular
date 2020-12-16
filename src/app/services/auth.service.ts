import { Injectable } from '@angular/core';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject <boolean> (this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  
  constructor(public jwtHelper: JwtHelperService,private token: TokenService) { }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


  loggedin():boolean{

  //  return true;
     return !!localStorage.getItem('token');
  }

    
changeAuthStatus(value: boolean){
  this.loggedIn.next(value);
}

  
}

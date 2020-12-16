import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public _authservice:AuthService,
    public _router:Router,
    public activatedRoute : ActivatedRoute,
    public translate: TranslateService){}

  canActivate(): boolean {
    console.log(24245);
    if(localStorage.getItem('token')){
     // console.log(this._authservice.loggedin);
     // console.log("1");
        return true;
      }else{
     //   console.log("2");

     const url = this.activatedRoute['_routerState'].snapshot.url;
     console.log(url);
     console.log(this._router.url.split('/')[2]);
     var lang= this._router.url.split('/')[2];
    
     this._router.navigate(['/login',lang])
     return false;

     


       
      }
    }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f: FormGroup;
  language:any;
  loggedIn = false;
  constructor(private fb: FormBuilder,
    public loginservice : LoginService,
    public router: Router,
    public activatedRoute:ActivatedRoute,
    public translate: TranslateService
    
    ) { 

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,, Validators.minLength(6)]],

    });
  
  }

  
  ngOnInit() {

    if(localStorage.getItem('token')){
      this.loggedIn = true;

    }

    this.activatedRoute.params.subscribe( (params : Params) => {
      console.log(params['lang']);
      this.translate.use( params['lang'] );
      this.language = params['lang'];
    }); 
  }

  onSubmit(modal: any): void {
    if (this.f.valid) {
      console.log(this.f.value);

      this.loginservice.login(this.f.value).subscribe((data:any)=>{
         console.log(data);
        //   this.products = data.home['products'];
        alert(data.message);

        if(data.status_code == 200){
          localStorage.setItem("token",data.token);
          this.router.navigate(["company", this.language]);

        }

       });


    
    } else {

      let temp = this.f.controls['name'];
      console.log('the controls', this.f.controls);
      console.log('name form', temp);
      Object.keys(this.f.controls).forEach(key => {
        this.f.get(key).markAsTouched();
      });
    }

  }
  onReset(): void {
    this.f.reset();
  }

  logout(){
    this.loggedIn = false;
    localStorage.clear();

  }


}

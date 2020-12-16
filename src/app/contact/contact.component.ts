import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompanyService } from '../services/company.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  f: FormGroup;
  language:any;
  constructor(private fb: FormBuilder,
    public router: Router,
    public activatedRoute:ActivatedRoute,
    public translate: TranslateService,
    public contactservice: CompanyService) { 

      this.f = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        comment: ['', [Validators.required]],
        telephone: ['', [Validators.required,, Validators.minLength(10)]],
  
      });
     
    }

    ngOnInit() {

      this.activatedRoute.params.subscribe( (params : Params) => {
        console.log(params['lang']);
        this.translate.use( params['lang'] );
        this.language = params['lang'];
      }); 
    }
  
    onSubmit(modal: any): void {
      if (this.f.valid) {
        console.log(this.f.value);
  
        this.contactservice.savecontact(this.f.value).subscribe((data:any)=>{
           console.log(data);
          //   this.products = data.home['products'];
          alert(data.message);
  
  
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

}

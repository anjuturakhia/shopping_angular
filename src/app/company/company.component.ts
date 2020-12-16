import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company:any=[];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,public companyservice:CompanyService) { }

  ngOnInit() {



    this.activatedRoute.params.subscribe( (params : Params) => {
      console.log(params['lang']);
      this.translate.use( params['lang'] );
      this.companyservice.getCompanylist(params['lang']).subscribe((data:any)=>{
        // console.log(data.home['products']);
           this.company = data.message;
           console.log(this.company);
   
   
       });
    }); 
  
  }
  

}

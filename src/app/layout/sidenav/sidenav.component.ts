import { Component, OnInit,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import {SidenavService} from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit  {
  countitems :number = 0;
  language: any = 'en';
  constructor(public sidenavserivce:SidenavService,
    public sharedservice: SharedserviceService,
    public activatedRoute : ActivatedRoute,
    public router : Router,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {


    this.sharedservice.getProducts().subscribe((data:any)=>{
      console.log(data);
        
       this.countitems = data.length;
       console.log(this.countitems);
      
 
     });

   
   }


  

}

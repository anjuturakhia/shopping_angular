import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { TranslateService } from '@ngx-translate/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  countitems :number = 0;
  totalprice: any = 0;
  lang = 'en';
  language: any = 'en';
  namecopy: any = 'Login';
  products = [];
  private singleProduct;
  private isAdded;
  public loginvalue : any;
  constructor(public sharedservice:SharedserviceService,
    public translate: TranslateService,
    public productservice:ProductlistService,
    public router:Router,
    public activatedRoute : ActivatedRoute
    ) { }

  ngOnInit() {

    this.translate.addLangs(['en', 'hi']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
  
    if(localStorage.getItem("token")){
      this.loginvalue = "Logout";
    }else{
      this.loginvalue = "Login";
    }
    

    this.sharedservice.getProducts().subscribe((data:any)=>{
     console.log(data);
       
      this.countitems = data.length;
      console.log(this.countitems);

      for (let i = 0; i < data.length; i++) {

        this.totalprice +=  data[i].price;

      }



    });
  
  }


  useLanguage(language: string) {
    console.log(language);

    this.translate.use(language);

    const url = this.activatedRoute['_routerState'].snapshot.url;
    console.log(url);

    console.log(this.router.url.split('/')[1]);
    this.language = language;

    this.router.navigate([this.router.url.split('/')[1],language]);

    
}

logout(loginvalue){
  console.log(loginvalue);
  if(loginvalue == "Login"){
    this.loginvalue = "Login";
    this.router.navigate(['login',this.language]);
  }else{
    this.loginvalue = "Logout";
    alert("Logged out successfully!!");
    localStorage.clear();
  }
 
}

  

  

}

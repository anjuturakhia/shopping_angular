import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductlistService } from '../services/productlist.service';
import { SharedserviceService } from '../services/sharedservice.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [];
  private singleProduct;
  private isAdded;
  constructor(public productservice:ProductlistService,
    public mySharedService:SharedserviceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    ) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe( (params : Params) => {
      console.log(params['lang']);
      this.translate.use( params['lang'] );
      this.productservice.getProducts(params['lang']).subscribe((data:any)=>{
        // console.log(data.home['products']);
           this.products = data.home['products'];
           console.log(this.products);
   
           this.isAdded = new Array(this.products.length);
           this.isAdded.fill(false, 0, this.products.length);
           console.log('this.isAdded -> ', this.isAdded, this.products);
   
   
       });
    }); 
  
  }


  addToCart(event, productId) {
    
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.mySharedService.addProductToCart(this.singleProduct[0]);
  }

}

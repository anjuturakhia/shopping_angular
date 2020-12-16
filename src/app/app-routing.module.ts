import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
 
  {path: "product/:lang",
  children:[
    {
    path: "",
    component: ProductComponent,
    },

    {
      path: "product/:lang",
      component: ProductComponent
      },

  ]
  },
  {path: "company/:lang", canActivate: [AuthGuard], component: CompanyComponent},
  {path: "login/:lang", component: LoginComponent},
  {path: "contact/:lang",  canActivate: [AuthGuard], component: ContactComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { forwardRef,NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavService } from './services/sidenav.service';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidebarDirective } from './sidebar.directive';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule , ReactiveFormsModule,NG_VALUE_ACCESSOR } from '@angular/forms';
import { JwtHelperService,JwtModule,JwtModuleOptions } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { APP_BASE_HREF, Location } from '@angular/common';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: tokenGetter,
  }
};

export function tokenGetter() {
	return localStorage.getItem('token');
  }

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    SidebarDirective,
    CompanyComponent,
    ContactComponent,
    ProductComponent,
    LoginComponent
  ],
  exports: [  ReactiveFormsModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: createTranslateLoader,
         deps: [HttpClient]
      }
   }),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
      multi: true
    },
    SidenavService,AuthGuard,
    JwtHelperService,AuthService,
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
		{
			provide: LocationStrategy, useClass: HashLocationStrategy },
		
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

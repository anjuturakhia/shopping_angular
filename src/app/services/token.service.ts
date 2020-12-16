import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  url = '';

  private iss = {

    // login : 'http://192.168.1.237/api/dologin',
    login : 'http://192.168.1.229/api/dologin',
    // login : this.url+'/api/dologin',

  };
  constructor(
    // public masterService : MasterService
  ) { 
    // this.url = masterService.url; 
  }

  handle(token){
    this.set(token);
    // console.log(this.isValid());
    // console.log(this.payload(token));
  }

  set(token){
    // console.log("setting token");
  //  console.log(token);

    // const tokenvalue = token.split('.')[1];

    // const value = token.split('.')[2];

    // const mainvalue = JSON.parse(atob(tokenvalue));

    // delete mainvalue.code;

    // const obj = btoa(JSON.stringify(mainvalue))

    // const maintoken = obj+'.'+value;

    localStorage.setItem('token',token);
    
    var token1 = this.getToken();

    // var check = {"original":token,"generatedtoken":token1}

    // console.log(check);

  }
  get(){
    return localStorage.getItem('token');
  }
  remove(){
    return localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();

    if(token){

      const payload = this.payload(token);

      if(payload){
        // Object.keys;
    //    console.log("Payload hii");
        // console.log(this.iss);
        // console.log(payload.iss);
        // const obj = <any>Object;
       // return  obj.values(this.iss).map(x => x.substr(0, x.length - 4))?true:false;
      return true;
        // return Object.values(this.iss).indexOf(payload.iss) > -1 ? true:false
      }

    }

    return false;

  }
  payload(token){

    const payload = token.split('.')[0];

  return  this.decode(payload);

}
decode(payload){


  return JSON.parse(atob(payload));

}


loggedIn(){
  
  return this.isValid();
}


getToken(){


  // var mainfirst = this.get();
//  const mainfirst = this.get().split('.')[0];
//  const mainsecond = this.get().split('.')[1];
//   const myvalue = this.decode(mainfirst);

//   myvalue.code = "navituschool";

//   var obj = {
//     "typ": "JWT",
//     "alg": "HS256"
//   };
//   var myJSON = JSON.stringify(obj);

  
  
//   const mytype = btoa(myJSON)

//   const secondvalue = this.Base64EncodeUrl(btoa(JSON.stringify(myvalue)));

  

//   const finaltoken = mytype+'.'+secondvalue+'.'+mainsecond;
const finaltoken = localStorage.getItem('token');

  return finaltoken;



}


 Base64EncodeUrl(str){
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}


}


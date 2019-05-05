import { HttpClient} from '@angular/common/http';
//import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable()
export class Api {
  url: string = 'https://prueba/';
  urlP: string = 'https://poised-tenure-239613.appspot.com/get-wallet-balance';
  constants = "view-source:https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/";
  datos:any;


  constructor(public http: HttpClient) {
  }
  obtenerPrecio(){
    this.http.get(this.urlP)
    .subscribe(data => {   // data is already a JSON object
      this.datos=data['Balance'];
      });
      console.log(this.datos)
      return this.datos;
  }
  // getWalletBalance(currency, cb)
  walletBalance(billetera:any){
    return new Promise(resolve => {
    let myJson={
      currency:billetera
    };
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.http.post(this.urlP,JSON.stringify(myJson),options)
    .subscribe(data => {   // data is already a JSON object
      this.datos=data['Balance'];
      resolve(this.datos);
      });
      // console.log(this.datos)
      // return (this.datos);  
      //return this.datos;
    });
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }
}

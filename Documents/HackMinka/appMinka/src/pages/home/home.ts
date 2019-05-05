import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import {Api} from "../../providers/api/api"
import { HttpClient } from '@angular/common/http';
import { ConfirmacionPage } from '../confirmacion/confirmacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //address = '1DExbZqgmQ2SEBbRrrQb9aAR6RxvrApoGH';
  opSelec:any;
  balance:any;
  metodo:boolean;
  public items:any;
  constructor(public navCtrl: NavController,public historial: HistorialProvider, public api:Api, public http:HttpClient,
    /*ivate qrScanner: QRScanner*/) {
      
   }
   ionViewDidEnter() {
    this.api.walletBalance("pesos").then(data =>{
      this.balance=data;
    });
  }

  pagar(){

  }

  onChangeHandler(event){
    if(this.opSelec=="ref")
    this.metodo=true;
    else this.metodo=false;
  }

  confirmar(){
    this.navCtrl.push(ConfirmacionPage);
  }

}
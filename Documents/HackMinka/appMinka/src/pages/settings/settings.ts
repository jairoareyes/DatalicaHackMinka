import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Api} from '../../providers/api/api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  billeSelec:any;
  valor:any;
  refer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http: HttpClient,public toastCtrl: ToastController, public api:Api,
     public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {

  }

  onChangeHandler(event: string) {
    this.presentLoading();
    this.valor=this.api.walletBalance(this.billeSelec).then(data =>{
      this.valor=data;
    });
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 500
    });
    loader.present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import {Api} from "../../providers/api/api"
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  account: { email: string, password: string } = {
    email: 'tomy@minka.io',
    password: 'testdasdasdasdasds'
  };
  private loginErrorString: string;
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,public api:Api) {
    this.loginErrorString = "¡Inicio de sesion exitoso!";
    api.obtenerPrecio();
  }


 // Attempt to login in through our User service
 doLogin() {
  this.api.obtenerPrecio();
  this.user.login(this.account).subscribe((resp) => {
    this.navCtrl.push(TabsPage);
  }, (err) => {
    this.navCtrl.push(TabsPage);
    // Unable to log in
    let toast = this.toastCtrl.create({
      message: this.loginErrorString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  });
}
}

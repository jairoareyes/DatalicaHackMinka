import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirmacion',
  templateUrl: 'confirmacion.html',
})
export class ConfirmacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacionPage');
  }
  confirmar(){
    this.presentLoading();

    let toast = this.toastCtrl.create({
      message: "¡Transaccion Exitosa!",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 500
    });
    loader.present();
  }
}

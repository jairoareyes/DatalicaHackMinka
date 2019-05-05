import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';


@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {
  item = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public historial: HistorialProvider) {
    this.item = navParams.get('transaccion');
  }

  ionViewDidLoad() {
    //this.item.push({"valor":"hola1","cliente":"Hola1"});
    //console.log(this.item2);
  }

}

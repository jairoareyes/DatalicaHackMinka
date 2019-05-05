import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  currentItems: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public historial: HistorialProvider) {
    this.currentItems = this.historial.query();
  }

  ionViewDidLoad() {
    console.log(this.currentItems);
  }

  openItem(transaccion : HistorialProvider) {
    this.navCtrl.push('TransactionDetailPage', {
      transaccion: transaccion
    });
  }

}

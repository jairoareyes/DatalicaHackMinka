import { Component } from '@angular/core';

import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransactionsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}

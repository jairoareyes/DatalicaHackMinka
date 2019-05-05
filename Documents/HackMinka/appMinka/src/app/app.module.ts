import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { TransactionsPage } from '../pages/transactions/transactions';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage} from '../pages/welcome/welcome'
import { ConfirmacionPage } from '../pages/confirmacion/confirmacion'
//import { LoginPage } from '../pages/login/login'
//import { SignupPage } from '../pages/signup/signup'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';
import { User } from '../providers/user/user';
import { Api } from '../providers/api/api';




@NgModule({
  declarations: [
    MyApp,
    TransactionsPage,
    SettingsPage,
    HomePage,
    TabsPage,
    WelcomePage,
    ConfirmacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionsPage,
    SettingsPage,
    HomePage,
    TabsPage,
    WelcomePage,ConfirmacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    HistorialProvider,
    User,
    Api
  ]
})
export class AppModule {}

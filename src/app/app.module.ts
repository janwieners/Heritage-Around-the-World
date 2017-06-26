import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {MapPage} from '../pages/map/map';
import {InfoPage} from '../pages/info/info';
import {OverviewPage} from '../pages/overview/overview';

import {TabsPage} from '../pages/tabs/tabs';

import {DetailJapanKinkakujiPage} from '../pages/detail-japan-kinkakuji/detail-japan-kinkakuji'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CodescannerPage} from "../pages/codescanner/codescanner";

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    TabsPage,
    InfoPage,
    OverviewPage,
    CodescannerPage,
    DetailJapanKinkakujiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    TabsPage,
    InfoPage,
    OverviewPage,
    CodescannerPage,
    DetailJapanKinkakujiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}

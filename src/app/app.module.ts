import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapPage } from '../pages/map/map';
import { InfoPage } from '../pages/info/info';
import { OverviewPage } from '../pages/overview/overview';

import { TabsPage } from '../pages/tabs/tabs';

import { DetailJapanKinkakujiPage } from '../pages/detail-japan-kinkakuji/detail-japan-kinkakuji'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    TabsPage,
    InfoPage,
    OverviewPage,
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
    DetailJapanKinkakujiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

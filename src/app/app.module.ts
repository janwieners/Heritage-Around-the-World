import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {InfoPage} from '../pages/info/info';
import {HelpPage} from "../pages/help/help";
import {OverviewPage} from '../pages/overview/overview';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CodescannerPage} from "../pages/codescanner/codescanner";

// Content
import {AustralianConvictSitesPage} from "../pages/australian-convict-sites/australian-convict-sites";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InfoPage,
    HelpPage,
    OverviewPage,
    CodescannerPage,
    AustralianConvictSitesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InfoPage,
    HelpPage,
    OverviewPage,
    CodescannerPage,
    AustralianConvictSitesPage
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

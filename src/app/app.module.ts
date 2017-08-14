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

import {TourPage} from "../pages/tour/tour";

// Tour Overview Pages
import {TourNaturkulturPage} from "../pages/tour-naturkultur/tour-naturkultur";
import {TourMenschenmonumentePage} from "../pages/tour-menschenmonumente/tour-menschenmonumente";
import {TourImmaterielleskulturerbePage} from "../pages/tour-immaterielleskulturerbe/tour-immaterielleskulturerbe";
import {TourStadtlandmenschPage} from "../pages/tour-stadtlandmensch/tour-stadtlandmensch";

// Content
import {AustralianConvictSitesPage} from "../pages/australian-convict-sites/australian-convict-sites";
import {NaraKasugaTaishaPage} from "../pages/nara-kasuga-taisha/nara-kasuga-taisha";
import {KyotoKinkakuJiPage} from "../pages/kyoto-kinkaku-ji/kyoto-kinkaku-ji";
import {HagiPage} from "../pages/hagi/hagi";
import {HashimaTakashimaPage} from "../pages/hashima-takashima/hashima-takashima";
import {NagasakiPage} from "../pages/nagasaki/nagasaki";
import {BaliPage} from "../pages/bali/bali";
import {MalakkaPage} from "../pages/malakka/malakka";
import {HoiAnPage} from "../pages/hoi-an/hoi-an";
import {KathmanduPage} from "../pages/kathmandu/kathmandu";
import {HampiElefantPage} from "../pages/hampi-elefant/hampi-elefant";
import {HampiLivingHeritagePage} from "../pages/hampi-living-heritage/hampi-living-heritage";
import {MumbaiPage} from "../pages/mumbai/mumbai";
import {TeheranPage} from "../pages/teheran/teheran";
import {PalmyraPage} from "../pages/palmyra/palmyra";
import {JordanienBedulPage} from "../pages/jordanien-bedul/jordanien-bedul";
import {LalibelaPage} from "../pages/lalibela/lalibela";
import {LuxorPage} from "../pages/luxor/luxor";
import {KilimanjaroNationalparkPage} from "../pages/kilimanjaro-nationalpark/kilimanjaro-nationalpark";
import {MalotiDrakensangNationalparkPage} from "../pages/maloti-drakensang-nationalpark/maloti-drakensang-nationalpark";
import {RobbenIslandPage} from "../pages/robben-island/robben-island";
import {IleDeGoreePage} from "../pages/ile-de-goree/ile-de-goree";
import {LiverpoolPage} from "../pages/liverpool/liverpool";
import {LaQuebradaDeHumahuacaPage} from "../pages/la-quebrada-de-humahuaca/la-quebrada-de-humahuaca";
import {MooretownPage} from "../pages/mooretown/mooretown";
import {LaAmistadNationalparkPage} from "../pages/la-amistad-nationalpark/la-amistad-nationalpark";
import {LosVoladoresPage} from "../pages/los-voladores/los-voladores";

@NgModule({
  declarations: [
    MyApp,
    TourPage,
    TabsPage,
    InfoPage,
    HelpPage,
    OverviewPage,
    CodescannerPage,
    TourNaturkulturPage,
    TourMenschenmonumentePage,
    TourImmaterielleskulturerbePage,
    TourStadtlandmenschPage,
    AustralianConvictSitesPage,
    NaraKasugaTaishaPage,
    KyotoKinkakuJiPage,
    HagiPage,
    HashimaTakashimaPage,
    NagasakiPage,
    BaliPage,
    MalakkaPage,
    HoiAnPage,
    KathmanduPage,
    HampiElefantPage,
    HampiLivingHeritagePage,
    MumbaiPage,
    TeheranPage,
    PalmyraPage,
    JordanienBedulPage,
    LalibelaPage,
    LuxorPage,
    KilimanjaroNationalparkPage,
    MalotiDrakensangNationalparkPage,
    RobbenIslandPage,
    IleDeGoreePage,
    LiverpoolPage,
    LaQuebradaDeHumahuacaPage,
    MooretownPage,
    LaAmistadNationalparkPage,
    LosVoladoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TourPage,
    TabsPage,
    InfoPage,
    HelpPage,
    OverviewPage,
    CodescannerPage,
    TourNaturkulturPage,
    TourMenschenmonumentePage,
    TourImmaterielleskulturerbePage,
    TourStadtlandmenschPage,
    AustralianConvictSitesPage,
    NaraKasugaTaishaPage,
    KyotoKinkakuJiPage,
    HagiPage,
    HashimaTakashimaPage,
    NagasakiPage,
    BaliPage,
    MalakkaPage,
    HoiAnPage,
    KathmanduPage,
    HampiElefantPage,
    HampiLivingHeritagePage,
    MumbaiPage,
    TeheranPage,
    PalmyraPage,
    JordanienBedulPage,
    LalibelaPage,
    LuxorPage,
    KilimanjaroNationalparkPage,
    MalotiDrakensangNationalparkPage,
    RobbenIslandPage,
    IleDeGoreePage,
    LiverpoolPage,
    LaQuebradaDeHumahuacaPage,
    MooretownPage,
    LaAmistadNationalparkPage,
    LosVoladoresPage
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

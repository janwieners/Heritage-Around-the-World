import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AlertController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {AustralianConvictSitesPage} from "../australian-convict-sites/australian-convict-sites";
import {NaraKasugaTaishaPage} from "../nara-kasuga-taisha/nara-kasuga-taisha";
import {KyotoKinkakuJiPage} from "../kyoto-kinkaku-ji/kyoto-kinkaku-ji";
import {HagiPage} from "../hagi/hagi";
import {HashimaTakashimaPage} from "../hashima-takashima/hashima-takashima";
import {NagasakiPage} from "../nagasaki/nagasaki";
import {BaliPage} from "../bali/bali";
import {MalakkaPage} from "../malakka/malakka";
import {HoiAnPage} from "../hoi-an/hoi-an";
import {KathmanduPage} from "../kathmandu/kathmandu";
import {HampiElefantPage} from "../hampi-elefant/hampi-elefant";
import {HampiLivingHeritagePage} from "../hampi-living-heritage/hampi-living-heritage";
import {MumbaiPage} from "../mumbai/mumbai";
import {TeheranPage} from "../teheran/teheran";
import {PalmyraPage} from "../palmyra/palmyra";
import {JordanienBedulPage} from "../jordanien-bedul/jordanien-bedul";
import {LalibelaPage} from "../lalibela/lalibela";
import {LuxorPage} from "../luxor/luxor";
import {KilimanjaroNationalparkPage} from "../kilimanjaro-nationalpark/kilimanjaro-nationalpark";
import {MalotiDrakensangNationalparkPage} from "../maloti-drakensang-nationalpark/maloti-drakensang-nationalpark";
import {RobbenIslandPage} from "../robben-island/robben-island";
import {IleDeGoreePage} from "../ile-de-goree/ile-de-goree";
import {LiverpoolPage} from "../liverpool/liverpool";
import {LaQuebradaDeHumahuacaPage} from "../la-quebrada-de-humahuaca/la-quebrada-de-humahuaca";
import {MooretownPage} from "../mooretown/mooretown";
import {LaAmistadNationalparkPage} from "../la-amistad-nationalpark/la-amistad-nationalpark";
import {LosVoladoresPage} from "../los-voladores/los-voladores";

@IonicPage()
@Component({
  selector: 'page-codescanner',
  templateUrl: 'codescanner.html',
})
export class CodescannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public barcodeScanner: BarcodeScanner, private alertCtrl: AlertController) {
  }

  private pages = {
    '1australia': AustralianConvictSitesPage,
    '2kasuga': NaraKasugaTaishaPage,
    '3kinkakuji': KyotoKinkakuJiPage,
    '4hagi': HagiPage,
    '5hashima': HashimaTakashimaPage,
    '6nagasaki': NagasakiPage,
    '7bali': BaliPage,
    '8malakka': MalakkaPage,
    '9vietnam': HoiAnPage,
    '10kathmandu': KathmanduPage,
    '11hampielefant': HampiElefantPage,
    '12hampiheritage': HampiLivingHeritagePage,
    '13mumbai': MumbaiPage,
    '14teheran': TeheranPage,
    '15palmyra': PalmyraPage,
    '16bedul': JordanienBedulPage,
    '17lalibela': LalibelaPage,
    '18luxor': LuxorPage,
    '19kilimanjaro': KilimanjaroNationalparkPage,
    '20sanipass': MalotiDrakensangNationalparkPage,
    '21robbenisland': RobbenIslandPage,
    '22goree': IleDeGoreePage,
    '23liverpool': LiverpoolPage,
    '24argentinien': LaQuebradaDeHumahuacaPage,
    '25jamaika': MooretownPage,
    '26panama': LaAmistadNationalparkPage,
    '27mexiko': LosVoladoresPage
  };

  private debug: boolean = false;

  private codeFormat: string = '';
  private codeContent: string = '';

  private startScanner(): void {

    this.barcodeScanner.scan().then((barcodeData) => {

      this.codeContent = barcodeData.text;
      this.codeFormat = barcodeData.format;

      let destination = this.pages[barcodeData.text];

      if (destination) {
        this.navCtrl.push(destination);
      } else {

        let alert = this.alertCtrl.create({
          title: 'Fehler',
          subTitle: 'Unbekannter QR-Code.',
          buttons: ['Schließen']
        });
        alert.present();
      }

    }, (err) => {

      let alert = this.alertCtrl.create({
        title: 'Fehler',
        subTitle: 'Kein Kamerazugriff möglich.',
        buttons: ['Schließen']
      });
      alert.present();
    });
  }

}

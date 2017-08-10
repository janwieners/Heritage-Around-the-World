import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AlertController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

// Content
import {AustralianConvictSitesPage} from "../australian-convict-sites/australian-convict-sites";

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
    '1australia': AustralianConvictSitesPage
  };

  private debug: boolean = true;

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

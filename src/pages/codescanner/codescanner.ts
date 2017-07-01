import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AlertController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-codescanner',
  templateUrl: 'codescanner.html',
})
export class CodescannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public barcodeScanner: BarcodeScanner, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  private codeFormat: string = '';
  private codeContent: string = '';

  private startScanner(): void {

    this.barcodeScanner.scan().then((barcodeData) => {

      this.codeContent = barcodeData.text;
      this.codeFormat = barcodeData.format;
    }, (err) => {

      let alert = this.alertCtrl.create({
        title: 'Fehler',
        subTitle: 'Kein Kamerazugriff möglich.',
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

    this.barcodeScanner.scan().then((barcodeData) => {

      let alert = this.alertCtrl.create({
        title: barcodeData.text,
        subTitle: barcodeData.format,
        buttons: ['Dismiss']
      });
      alert.present();
    }, (err) => {
    });
  }

}

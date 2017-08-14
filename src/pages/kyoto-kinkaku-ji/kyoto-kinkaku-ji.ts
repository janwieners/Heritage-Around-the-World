import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KyotoKinkakuJiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-kyoto-kinkaku-ji',
  templateUrl: 'kyoto-kinkaku-ji.html',
})
export class KyotoKinkakuJiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KyotoKinkakuJiPage');
  }

}

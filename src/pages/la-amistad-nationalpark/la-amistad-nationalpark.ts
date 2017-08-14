import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaAmistadNationalparkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-la-amistad-nationalpark',
  templateUrl: 'la-amistad-nationalpark.html',
})
export class LaAmistadNationalparkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaAmistadNationalparkPage');
  }

}

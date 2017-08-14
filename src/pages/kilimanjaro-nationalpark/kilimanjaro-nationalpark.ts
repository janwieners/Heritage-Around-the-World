import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KilimanjaroNationalparkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-kilimanjaro-nationalpark',
  templateUrl: 'kilimanjaro-nationalpark.html',
})
export class KilimanjaroNationalparkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KilimanjaroNationalparkPage');
  }

}

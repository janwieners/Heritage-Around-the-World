import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {InfoPage} from "../info/info";
import {OverviewPage} from "../overview/overview";

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openInfoPage() {
    this.navCtrl.push(InfoPage);
  }

  openOverviewPage() {
    this.navCtrl.push(OverviewPage);
  }

}

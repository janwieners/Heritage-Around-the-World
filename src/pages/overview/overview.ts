import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AustralianConvictSitesPage} from "../australian-convict-sites/australian-convict-sites";

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  private pages = [
    AustralianConvictSitesPage];

  openPage(pagenumber:number) {
    this.navCtrl.push(this.pages[pagenumber]);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

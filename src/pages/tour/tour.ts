import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TourNaturkulturPage} from "../tour-naturkultur/tour-naturkultur";
import {TourMenschenmonumentePage} from "../tour-menschenmonumente/tour-menschenmonumente";
import {TourImmaterielleskulturerbePage} from "../tour-immaterielleskulturerbe/tour-immaterielleskulturerbe";
import {TourStadtlandmenschPage} from "../tour-stadtlandmensch/tour-stadtlandmensch";

@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private pages = [TourNaturkulturPage,
    TourMenschenmonumentePage,
    TourImmaterielleskulturerbePage,
    TourStadtlandmenschPage];

  openOverviewPage(pagenumber: number) {
    this.navCtrl.push(this.pages[pagenumber]);
  }
}

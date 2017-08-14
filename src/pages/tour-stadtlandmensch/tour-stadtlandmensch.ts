import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tour-stadtlandmensch',
  templateUrl: 'tour-stadtlandmensch.html',
})
export class TourStadtlandmenschPage {

  private pages = [];
  // 2 Nara: Kasuga Taisha, 3 Kyôto: Kinakaku-ji, 4 Hagi, 5 Hashima und Takashima, 6 Nagasaki, 8 Malakka, 9 Hoi An, 23 Liverpool

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

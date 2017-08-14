import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tour-menschenmonumente',
  templateUrl: 'tour-menschenmonumente.html',
})
export class TourMenschenmonumentePage {

  private pages = [];
  // 1 Australian Convict Sites, 12 Hampi: living heritage, 15 Palmyra, 17 Lalibela, 18 Luxor, 21 Robben Island, 22 Ile de Gorée

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

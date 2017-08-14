import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tour-immaterielleskulturerbe',
  templateUrl: 'tour-immaterielleskulturerbe.html',
})
export class TourImmaterielleskulturerbePage {

  private pages = [];
  // 7 Bali, 11 Hampi: Elefant, 13 Mumbai, 14 Teheran, 16 Jordanien: Bedul, 27 Los Voladores

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

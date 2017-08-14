import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-tour-naturkultur',
  templateUrl: 'tour-naturkultur.html',
})
export class TourNaturkulturPage {

  private pages = [];
  // 19 Kilimanjaro Nationalpark, 20 Maloti-Drakensberg Nationalpark, 24 La Quebrada de Humahuaca, 25 Mooretown, 26 La Amistad Nationalpark

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

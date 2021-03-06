import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-la-quebrada-de-humahuaca',
  templateUrl: 'la-quebrada-de-humahuaca.html',
})
export class LaQuebradaDeHumahuacaPage {

  @ViewChild(Content) content: Content;

  private videoUrl: SafeResourceUrl;

  scrollTo(element:string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 1500)
  }

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Ilw45DNuRWI')
  }

}

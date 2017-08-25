import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-robben-island',
  templateUrl: 'robben-island.html',
})
export class RobbenIslandPage {

  @ViewChild(Content) content: Content;

  private firstVideoUrl: SafeResourceUrl;
  private secondVideoUrl: SafeResourceUrl;

  scrollTo(element:string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 1500)
  }

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.firstVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/SzuTGZHj8CA')
    this.secondVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/_GCmNc-bSNQ')
  }

}

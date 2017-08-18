import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-maloti-drakensang-nationalpark',
  templateUrl: 'maloti-drakensang-nationalpark.html',
})
export class MalotiDrakensangNationalparkPage {

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

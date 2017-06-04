import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailJapanKinkakujiPage } from './detail-japan-kinkakuji';

@NgModule({
  declarations: [
    DetailJapanKinkakujiPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailJapanKinkakujiPage),
  ],
  exports: [
    DetailJapanKinkakujiPage
  ]
})
export class DetailJapanKinkakujiPageModule {}

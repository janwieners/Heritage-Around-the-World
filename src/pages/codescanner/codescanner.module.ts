import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodescannerPage } from './codescanner';

@NgModule({
  declarations: [
    CodescannerPage,
  ],
  imports: [
    IonicPageModule.forChild(CodescannerPage),
  ],
  exports: [
    CodescannerPage
  ]
})
export class CodescannerPageModule {}

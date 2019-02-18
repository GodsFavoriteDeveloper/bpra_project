import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenderPage } from './tender';

@NgModule({
  declarations: [
    TenderPage,
  ],
  imports: [
    IonicPageModule.forChild(TenderPage),
  ],
  exports: [
    TenderPage
  ]
})
export class TenderPageModule {}

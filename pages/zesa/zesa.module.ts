import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZesaPage } from './zesa';

@NgModule({
  declarations: [
    ZesaPage,
  ],
  imports: [
    IonicPageModule.forChild(ZesaPage),
  ],
  exports: [
    ZesaPage
  ]
})
export class ZesaPageModule {}

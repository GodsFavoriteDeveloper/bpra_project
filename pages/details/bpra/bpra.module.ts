import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BpraPage } from './bpra';

@NgModule({
  declarations: [
    BpraPage,
  ],
  imports: [
    IonicPageModule.forChild(BpraPage),
  ],
  exports: [
    BpraPage
  ]
})
export class BpraPageModule {}

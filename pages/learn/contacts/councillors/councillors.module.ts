import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncillorsPage } from './councillors';

@NgModule({
  declarations: [
    CouncillorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncillorsPage),
  ],
  exports: [
    CouncillorsPage
  ]
})
export class CouncillorsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnPage } from './learn';

@NgModule({
  declarations: [
    LearnPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnPage),
  ],
  exports: [
    LearnPage
  ]
})
export class LearnPageModule {}

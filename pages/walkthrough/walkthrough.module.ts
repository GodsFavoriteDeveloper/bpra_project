import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkthroughPage } from './walkthrough';


@NgModule({
  declarations: [
    WalkthroughPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkthroughPage),
  ],
  exports: [
    WalkthroughPage
  ],
  providers: [
  ]
})
export class WalkthroughPageModule {}

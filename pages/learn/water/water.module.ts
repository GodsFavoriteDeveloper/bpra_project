import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterPage } from './water';
import { InAppBrowser } from '@ionic-native/in-app-browser'

@NgModule({
  declarations: [
    WaterPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterPage),
  ],
  providers: [
    InAppBrowser
  ]
})
export class WaterPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
  ],
  exports: [
    FeedbackPage
  ],
  providers: [
    Camera
  ]
})
export class FeedbackPageModule {}

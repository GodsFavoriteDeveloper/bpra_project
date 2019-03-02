import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
  ],
  exports: [
    ReportPage
  ],
  providers: [
    EmailComposer
  ]
})
export class ReportPageModule {}

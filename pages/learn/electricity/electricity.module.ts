import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectricityPage } from './electricity';

@NgModule({
  declarations: [
    ElectricityPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectricityPage),
  ],
})
export class ElectricityPageModule {}

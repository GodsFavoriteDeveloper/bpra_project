import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceDeliveryPage } from './service-delivery';

@NgModule({
  declarations: [
    ServiceDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDeliveryPage),
  ],
})
export class ServiceDeliveryPageModule {}

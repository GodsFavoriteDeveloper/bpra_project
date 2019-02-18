import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tender',
  templateUrl: 'tender.html',
})
export class TenderPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('tender'));
    this.data = this.navParams.get('tender');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TenderPage');
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  search: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data: DataProvider) {
    console.log(this.navParams.get('item'));
    this.id = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.loadCategories();
  }

  // Load Categories Data
  loadCategories(){

  }

  itemTapped(event, tender) {
    this.navCtrl.push('TenderPage', {
      tender: tender
    });
  }

}

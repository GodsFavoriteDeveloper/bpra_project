import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.loadCategories();
  }


  // Load Categories Data
  loadCategories(){
 
  }

  itemTapped(event, item) {
    this.navCtrl.push('SearchPage', {
      item: item
    });
  }

}

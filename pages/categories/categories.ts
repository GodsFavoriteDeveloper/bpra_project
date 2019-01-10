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
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
    this.data.getTenderCategories().subscribe(data => {
      console.log(data, 'this is from messages');
      this.categories = data.categories;
      loader.dismiss();
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push('SearchPage', {
      item: item
    });
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
  showSkip = true;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public menu: MenuController) {
  }

  start() {
    this.navCtrl.setRoot(TabsPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
      //this.storage.set('data', [{name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}, {name: 'Norman', surname: 'Dube', occupation: 'Entrepreneur/Developer'}])
      //console.log(this.storage.get('data'));
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    //this.slides.update();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
    this.addContact();
  }

   ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  addContact(){
   
  }

}

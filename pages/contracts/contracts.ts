import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-contracts',
  templateUrl: 'contracts.html',
})
export class ContractsPage {
  contracts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractsPage');
    this.loadContracts()
  }

  // Load Tenders Data
  loadContracts(){

  }

  itemTapped(event, contract) {
    this.navCtrl.push('ContractPage', {
      contract: contract
    });
  }

}

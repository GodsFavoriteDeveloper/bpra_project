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
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
    this.data.getContracts().subscribe(data => {
      console.log(data, 'this is from messages');
      this.contracts = data;
      loader.dismiss();
    })
  }

  itemTapped(event, contract) {
    this.navCtrl.push('ContractPage', {
      contract: contract
    });
  }

}

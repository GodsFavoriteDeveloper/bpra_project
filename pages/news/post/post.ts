import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, public modalCtrl: ModalController) {
    this.data = this.navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
    console.log(this.data);
  }

  ionViewDidEnter(){
    
  }

  async comment(){
     const myModal = this.modalCtrl.create('CommentModalPage')
    await myModal.onDidDismiss((data)=>{
      console.log(data)
      if(data){
        
      }
    })
    myModal.present();
  }


  share(a, b, c, d){
    console.log(a, c, d)
    // Share via email
    this.socialSharing.share(a, b, c, d).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }



}

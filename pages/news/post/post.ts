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
  comments: ["name"];
  hasComments: boolean = false;

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


  share(){
    // Share via email
    this.socialSharing.share(this.data.title, this.data.content, this.data.thumbnail, this.data.url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }



}

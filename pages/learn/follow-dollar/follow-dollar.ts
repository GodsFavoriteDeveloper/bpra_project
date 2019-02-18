import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-follow-dollar',
  templateUrl: 'follow-dollar.html',
})
export class FollowDollarPage {
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowDollarPage');
    this.loadPostCategory()
  }

  loadPostCategory(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
    this.data.getPostCategory('follow-your-dollar').subscribe(data => {
      for(let post of data.posts){
          post.excerpt = post.excerpt.split('<a')[0] + "</p>";
          post.thumbnail = post.thumbnail || 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'
        }
        this.posts = data.posts;
      loader.dismiss();
    })
  }

  itemTapped(event, post) {
    this.navCtrl.push('PostPage', {
      post: post
    });
  }

}

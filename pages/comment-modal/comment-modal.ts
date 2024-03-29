import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-comment-modal',
  templateUrl: 'comment-modal.html',
})
export class CommentModalPage {
  name: string;
  description: string;

  constructor(public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentModalPage');
    console.log(this.navParams.get('data'))
  }

  closeModal(){
    if(this.name && this.description){
      const userComment = {"name": this.name, "description": this.description}
    this.view.dismiss(userComment);
    
    } else {
      alert('Comment or name missing')
    }
    
  }

}

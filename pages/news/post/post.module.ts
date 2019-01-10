import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
  ],
  exports: [
    PostPage
  ],
  providers: [
    SocialSharing
  ]
})
export class PostPageModule {}

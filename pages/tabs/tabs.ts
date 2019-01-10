import { Component, ViewChild } from '@angular/core';
import { Tabs} from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') public tabRef: Tabs;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = 'LearnPage';
  tab2Root: any = 'NewsPage';
  tab3Root: any = 'FeedbackPage';
  tab4Root: any = 'DetailsPage';

  constructor() {
  }

  public selectTab(index: number) {
    console.log("selectTab called");
    this.tabRef.select(index);
  }
}

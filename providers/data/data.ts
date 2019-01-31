import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataProvider {
  url: string = 'https://bpra.cloudaccess.host/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getTenders(){
    return this.http.get(this.url + '?json=get_posts&post_type=tenders')
  }

  getContracts(){
    return this.http.get(this.url + '?json=get_posts&post_type=contracts')
  }

  getTenderCategories(){
    return this.http.get(this.url + '?json=get_category_index')
  }
  
  search(a){
    return this.http.get(this.url + '?json=get_category_posts&id=' + a + '&post_type=tenders')
  }

 /* getNews(){
    return this.http.get(this.url + '?json=get_posts&post_type=news')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }*/

  getNews(){
    return this.http.get('assets/json/news.json')
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs/Observable'


@Injectable()
export class DataProvider {
  url: string = 'https://bpra.cloudaccess.host/';

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getTenders(){
    return this.http.get(this.url + '?json=get_posts&post_type=tenders')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }

  getContracts(){
    return this.http.get(this.url + '?json=get_posts&post_type=contracts')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }

  getTenderCategories(){
    return this.http.get(this.url + '?json=get_category_index')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }
  
  search(a){
    return this.http.get(this.url + '?json=get_category_posts&id=' + a + '&post_type=tenders')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }

 /* getNews(){
    return this.http.get(this.url + '?json=get_posts&post_type=news')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }*/

  getNews(){
    return this.http.get('assets/json/news.json')
    .do(this.logResponse)
    .map(this.extractData)
    //.catch(this.catchError);
  }

  logResponse(res: Response){
    console.log(res);
  }

  extractData(res: Response){
    return res.json();
  }

}

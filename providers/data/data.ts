import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()
export class DataProvider {
  url: string = 'http://bpra.org.zw/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getPosts(): Observable<any>{
    return this.http.get(this.url + 'api/get_posts')
  }

  getPostCategory(a): Observable<any>{
    return this.http.get(this.url + 'api/get_category_posts/?slug=' + a)
  }

}

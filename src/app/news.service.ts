import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewShape } from './models/newshape';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http : HttpClient) { }
  
  public get_news(url:string){

   return  this.http.get<NewShape[]>(url)
  
  }
}

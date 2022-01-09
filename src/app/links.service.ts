import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { SolrResponse } from './models/solrResponse';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http : HttpClient) { }
  
  public get_news(url:string){

   return  this.http.get<SolrResponse>(url)
  
  }
}



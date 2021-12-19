import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NewShape } from './models/newshape';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http : HttpClient) { }
  
  public get_news(url:string){

   return  this.http.get<NewShape[]>(url)
  
  }

  
  
}

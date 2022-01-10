import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http : HttpClient) { }
  
  public predict_next_words(url:string , text_value : string){
    let obj =  {
      "text": text_value,
      "candidate": 5
    }
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const body = JSON.stringify(obj);
    // return ["word1","word2","word3"]
    return  this.http.post<any>(url ,body , options)


  
  }
  
}

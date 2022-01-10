import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from '../links.service';
import { NewShape } from '../models/newshape';

@Component({
  selector: 'app-newscards',
  templateUrl: './newscards.component.html',
  styleUrls: ['./newscards.component.css'],
  // inputs : ["sub_news_text"]
})
export class NewscardsComponent implements OnInit {
  // Declare Input Feature for this Componente
  // @Input() sub_news_text !: string


  searching_text !: string |null
  news_list !: NewShape[]
  url_endpoint = "assets/news_sample.json"
  base_url = "http://104.43.202.170/solr/#/news/query?indent=true&q.op=OR&q=text%3A"
  // base_url = "http://localhost:8983/solr/arabic/select?indent=true&q.op=OR&q=text%3A"

  // http://104.43.202.170/solr/#/news/query
  
  
  constructor(private linksService: LinksService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap
      .subscribe(params => {
        // this.sub_news_text = params['text'];
        if (params.get("text")){
          this.searching_text =params.get("text") 
        }
        else{
          this.searching_text =""

        }
        
        this.linksService.get_news(this.base_url + this.searching_text)
          .subscribe(res => {
            console.log(this.base_url);
            
            console.log(res['response'])
            console.log(res['responseHeader'])  
            
            this.news_list = res['response'].docs.slice(0, 5) // This line Will be modified , simulate the search result return only five news
            console.log(this.news_list[0].url[0]);

          }, err => {
            console.log(err);

          })

      });


  }

  text_splitting(long_text: string, word_count = 25) {

    let spliting = long_text.split(" ")
    let short_text = spliting.slice(0, word_count).join(" ")

    return short_text
  }

}

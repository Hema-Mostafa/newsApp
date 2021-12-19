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


  sub_news_text !: string
  news_list !: NewShape[]
  url_endpoint = "assets/news_sample.json"

  constructor(private linksService: LinksService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap
      .subscribe(params => {
        // this.sub_news_text = params['text'];
        console.log("params");
        console.log(params.get("text"));
        this.linksService.get_news(this.url_endpoint)
          .subscribe(res => {

            this.news_list = res.slice(0, 5) // This line Will be modified , simulate the search result return only five news
            console.log(this.news_list);

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

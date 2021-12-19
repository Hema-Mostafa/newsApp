import { Component, OnInit } from '@angular/core';
import { LinksService } from '../links.service';
import { NewShape } from '../models/newshape';

@Component({
  selector: 'app-linksbar',
  templateUrl: './linksbar.component.html',
  styleUrls: ['./linksbar.component.css']
})
export class LinksbarComponent implements OnInit {

  news !: any[]
  random_news !: NewShape[]

  constructor(private linksService: LinksService) { }

  ngOnInit(): void {

    this.linksService.get_news('assets/news_sample.json')
      .subscribe(res => {
        this.news = res  
        this.random_news = this.getRandomValues(this.news, 10)
      }, error => {
        console.log(error);

      })

  }

  // Helper Function  
  private getRandomInt(min = 0, max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  private getRandomValues(news_list: NewShape[], max_length = 10) {

    let returned_news_list: NewShape[] = []
    let dict: any = {}

    while (returned_news_list.length < max_length) {
      
      let random_index = this.getRandomInt(0, news_list.length)
      
      //  to prevent get the same index twice 
      if (!(random_index + "" in dict)) {
        returned_news_list.push(news_list[random_index])
      }

      dict[random_index +""] = random_index
    
    }

    return returned_news_list

  }

}

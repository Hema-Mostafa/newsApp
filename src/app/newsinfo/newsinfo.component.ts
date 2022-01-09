import { Component, OnInit } from '@angular/core';
import { NewShape } from '../models/newshape';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-newsinfo',
  templateUrl: './newsinfo.component.html',
  styleUrls: ['./newsinfo.component.css']
})
export class NewsinfoComponent implements OnInit {

  image_src = "../../assets/"
  sub_text = ""
  show = null

  random_item !: NewShape
  news_list !: NewShape[]

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {

    this.newsService.get_news("assets/mini_smaple_news.json")
      .subscribe(res=>{

        this.news_list = res
        let randm_index = this.getRandomInt(0 , this.news_list.length)

        this.random_item = this.news_list[randm_index]
        this.image_src += this.random_item.image_name
        
        let spliting = this.random_item.text.split(" ")
        this.sub_text = spliting.slice(0 , 80).join(" ") 
        
      },err =>{
        console.log(err);
        
      })

      

  }
  private getRandomInt(min = 0, max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

}

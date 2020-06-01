import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news;
  tabs=[];
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(x => {
      this.news = x
      this.news.forEach(element => {
        element.c = false
      });
    });
  }
  readMore(index){
    this.news[index].c = !this.news[index].c
  }

}

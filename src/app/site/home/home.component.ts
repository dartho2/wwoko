import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  news;
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit() {
    this.newsService.getNews().subscribe(x => {
      this.news = x
    })
    

    // this.loadScript('assets/revolution/js/owl.carousel.min.js');
    this.loadScript('assets/revolution/js/jquery.themepunch.tools.min.js');
    this.loadScript('assets/revolution/js/jquery.themepunch.revolution.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.actions.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.carousel.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.kenburn.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.layeranimation.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.migration.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.navigation.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.parallax.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.slideanims.min.js');
    this.loadScript('assets/revolution/js/extensions/revolution.extension.video.min.js');
    this.loadScript('assets/revolution/js/revolution-custom.js');
  }
  constructor(private newsService: NewsService) { }

}

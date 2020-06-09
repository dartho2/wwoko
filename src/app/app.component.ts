import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='Restauracja Loco Wok Bar Smaki Azji - Nisko'
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Restauracja Loco Wok Bar Smaki Azji - Nisko'},
      {name: 'description', content: 'Serwujemy dania kuchni tajskiej oraz japońskiej. Doskonałe restauracje w Nisku na ul. Tysiąclecia 15'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}

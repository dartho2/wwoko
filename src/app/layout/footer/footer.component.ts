import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

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
    this.loadScript('assets/js/jquery.min.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadScript('assets/js/mega-menu/mega_menu.js');
    this.loadScript('assets/js/popup/jquery.magnific-popup.js');
    this.loadScript('assets/js/custom.js');
  }
}

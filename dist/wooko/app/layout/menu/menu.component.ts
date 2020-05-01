import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
    this.loadScript('assets/js/owl.carousel.min.js');
    this.loadScript('assets/js/jquery.appear.js');
    this.loadScript('assets/js/counter/jquery.countTo.js');
    this.loadScript('assets/js/datepicker/bootstrap-datetimepicker.min.js');
    this.loadScript('assets/js/book/modernizr.custom.js');
    this.loadScript('assets/js/book/bookblock.min.js');
    this.loadScript('assets/js/jquery.nicescroll.min.js');
    this.loadScript('assets/js/jquery-select.js');
    this.loadScript('assets/revolution/js/jquery.themepunch.tools.min.js');
    this.loadScript('assets/revolution/js/jquery.themepunch.revolution.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.actions.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.carousel.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.kenburn.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.layeranimation.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.migration.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.navigation.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.parallax.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.slideanims.min.js');
    // this.loadScript('assets/revolution/js/extensions/revolution.extension.video.min.js');
    // this.loadScript('assets/revolution/js/revolution-custom.js');
    this.loadScript('assets/js/popup/jquery.magnific-popup.js');
    // this.loadScript('assets/js/isotope/isotope.pkgd.min.js');
    this.loadScript('assets/js/custom.js');
  }

}

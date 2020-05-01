import { Component, OnInit, ViewChild } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    columnWidth: 4  
  };
  gallery: any = [{ img: "assets/images/gallery/04.jpg", name: "Czarny pieprz", tag: "Dania" },
  { img: "assets/images/gallery/05.jpg", name: "Kurczak w cieście", tag: "Dania" },
  { img: "assets/images/gallery/06.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { img: "assets/images/gallery/01.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { img: "assets/images/gallery/02.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { img: "assets/images/gallery/03.jpg", name: "Rafał Kądziołka", tag: "Szef" }]
  constructor() {
  }

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages: string[];
  limit = 15;

  dummyPictures = []
  ngOnInit() {
    this.masonryImages = this.gallery.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }


}

import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { map } from 'rxjs/operators';
// import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // public masonryOptions: NgxMasonryOptions = {
  //   gutter: 20,
  //   columnWidth: 4
  // };
  items: GalleryItem[];
  gallery: any = [{ srcUrl: "assets/images/gallery/04.jpg", name: "Czarny pieprz", tag: "Dania" },
  { srcUrl: "assets/images/gallery/05.jpg", name: "Kurczak w cieście", tag: "Dania" },
  { srcUrl: "assets/images/gallery/06.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { srcUrl: "assets/images/gallery/01.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { srcUrl: "assets/images/gallery/02.jpg", name: "Rafał Kądziołka", tag: "Szef" },

  { srcUrl: "assets/images/gallery/03.jpg", name: "Rafał Kądziołka", tag: "Szef" }]
  constructor(public _gallery: Gallery) {
  }

  // @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  // masonryImages: string[];
  // limit = 15;
  // dummyPictures = []

  ngOnInit() {
    // this.masonryImages = this.gallery.slice(0, this.limit);
    // // 1. Create gallery items
    // this.items = this.gallery.map(item =>
    //   new ImageItem({ src: item.srcUrl, thumb: item.srcUrl })
    // );

    // Load items into the lightbox
    this.basicLightboxExample();

    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();
    console.log(this.items)
  }

  basicLightboxExample() {
    this._gallery.ref().load(this.items);
  }
  // showMoreImages() {
  //   this.limit += 15;
  //   this.masonryImages = this.dummyPictures.slice(0, this.limit);
  // }
  /**
  * Use custom gallery config with the lightbox
  */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this._gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);

  }
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    // 1. Create gallery items
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.srcUrl, desc: item.desc })
    );

    // Load items into the lightbox
    this.basicLightboxExample();

    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }
}

const data = [{ srcUrl: "assets/images/gallery/04.jpg", desc: "Czarny pieprz", tag: "Dania" },
{ srcUrl: "assets/images/gallery/05.jpg", desc: "Kurczak w cieście", tag: "Dania" },
{ srcUrl: "assets/images/gallery/06.jpg", desc: "Rafał Kądziołka", tag: "Szef" },
{ srcUrl: "assets/images/gallery/01.jpg", desc: "Rafał Kądziołka", tag: "Szef" },
{ srcUrl: "assets/images/gallery/02.jpg", desc: "Rafał Kądziołka", tag: "Szef" },
{ srcUrl: "assets/images/gallery/03.jpg", desc: "Rafał Kądziołka", tag: "Szef" }];
  
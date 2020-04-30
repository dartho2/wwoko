import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { MenuDishComponent } from './site/menu/menu.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './site/contact/contact.component';
import { GalleryComponent } from './site/gallery/gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuDishComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

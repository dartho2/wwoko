import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
title = "Kontakt Loco Wok Bar - czyli jak zjeść zdrowe lekkie Tajksie posiłki "
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    
  }

}

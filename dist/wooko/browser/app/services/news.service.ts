import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from './news.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class NewsService {

  constructor(private _http: HttpClient) {
  }

  getNews(): Observable<NewsService[]> {
    return this._http.get<NewsService[]>('http://loco-wokbar.pl:8080/api/news');
  }
}
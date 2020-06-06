import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuModel } from './menu.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MenuService {

  constructor(private _http: HttpClient) {
  }

  getMenu(): Observable<MenuService[]> {
    return this._http.get<MenuService[]>('https://loco-wokbar.pl:8080/api/menu');
  }
}
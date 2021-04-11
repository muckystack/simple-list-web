import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(public _http: HttpClient) {}

  getListOfCateoryId(idCategory:String): Observable<any> {
    return this._http.get(`${environment.baseUrl}list/${idCategory}`);
  }
}

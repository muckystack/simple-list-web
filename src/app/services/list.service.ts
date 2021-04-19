import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListModel } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(public _http: HttpClient) {}

  getListOfCateoryId(idCategory: String): Observable<any> {
    return this._http.get(`${environment.baseUrl}list/${idCategory}`);
  }

  createList(list: ListModel): Observable<any> {
    return this._http.post(`${environment.baseUrl}list/`, list);
  }

  editList(list: ListModel): Observable<any> {
    return this._http.put(`${environment.baseUrl}list/${list.id}`, list);
  }

  deleteListByCategory(list: ListModel): Observable<any> {
    return this._http.delete(`${environment.baseUrl}list/${list.id}`);
  }
}

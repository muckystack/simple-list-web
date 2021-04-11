import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(public _http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this._http.get(`${environment.baseUrl}category`);
  }

  createCategory(category:CategoryModel): Observable<any> {
    return this._http.post(`${environment.baseUrl}category`, category);
  }

  editCategory(category:CategoryModel): Observable<any> {
    return this._http.put(`${environment.baseUrl}category/${category.id}`, category);
  }

  deleteCategoyByid(category: CategoryModel): Observable<any> {
    return this._http.delete(`${environment.baseUrl}category/${category.id}`);
  }
}

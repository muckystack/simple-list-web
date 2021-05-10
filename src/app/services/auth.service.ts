import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUserModel, UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string = '';
  public email: string = '';

  constructor(public _http: HttpClient) {}

  login(user: UserModel): Observable<any> {
    return this._http.post(`${environment.baseUrl}auth/login`, user);
  }

  validateToken(): Observable<any> {
    return this._http.post(`${environment.baseUrl}auth/validatetoken`, {});
  }
  
  register(user: NewUserModel): Observable<any> {
    return this._http.post(`${environment.baseUrl}auth/register`, user);
  }
}

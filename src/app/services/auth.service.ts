import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string = '';

  constructor(public _http: HttpClient) {}

  login(user: UserModel): Observable<any> {
    return this._http.post(`${environment.baseUrl}auth/login`, user);
  }
}

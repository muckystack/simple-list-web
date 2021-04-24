import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private _authService:AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'token': this._authService.token
    });

    const reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(catchError(this.tryError));
  }

  tryError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    // TODO: Registrar erroe en archivo de errores
    console.log('Registrar en el archivo de errores');
    console.warn(error);
    const err = error.error;
    Swal.fire({
      icon: err.error.icon,
      title: err.error.title,
      text: err.message
    });
    return throwError('Error');
  }
}

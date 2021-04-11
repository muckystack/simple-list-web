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

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log('Paso por el interceptor');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    const reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(
      catchError(this.tryError)
    );

  }

  tryError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    // TODO: Registrar erroe en archivo de errores
    console.log('Registrar en el archivo de errores');
    console.warn(error);
    return throwError('Error');
  }
}

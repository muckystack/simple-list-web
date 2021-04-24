import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading:boolean = false;

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url='/api';
  constructor(private http: HttpClient) { }

  //get rol
  getRol():Observable<any>{
    return this.http.get<any>(this.url);
  }
}

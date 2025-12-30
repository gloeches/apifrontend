import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://192.168.0.148:2000/api';

  constructor(private http: HttpClient) { }

  getData(value: number): Observable<any> {
    const params = new HttpParams().set('value', value.toString());
    return this.http.get(this.apiUrl, { params });
  }
}

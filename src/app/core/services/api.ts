import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RuntimeConfigService } from './runtime-config-service';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private squareApiUrl: string;
  private cubeApiUrl: string;

  constructor(private http: HttpClient, private configService: RuntimeConfigService) {
    this.squareApiUrl = this.configService.config.squareApiUrl;
    this.cubeApiUrl = this.configService.config.cubeApiUrl;
   }

  getData(value: number): Observable<any> {
    const params = new HttpParams().set('value', value.toString());
    return this.http.get(this.squareApiUrl, { params });
  }

  getCubeData(value: number): Observable<any> {
    const params = new HttpParams().set('value', value.toString());
    return this.http.get(this.cubeApiUrl, { params });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  search(): Observable<any> {
    return this.http.get(`${environment.endpoint_url}`);
  }
  findByCode(code: string): Observable<any> {
    return this.http.get(`${environment.endpoint_url}/${code}`);
  }
}

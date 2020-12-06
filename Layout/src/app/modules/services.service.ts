import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient ) { }

  getHomeInfo() {
    return this.http.get('http://medimmo.ca/api/entreprise');
  }
}
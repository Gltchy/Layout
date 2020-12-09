import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient ) { }

  getHomeInfo() {
    
    return this.http.get('http://medimmo.ca/api/entreprise');
  }

  getPropriete(){
    return this.http.get('http://medimmo.ca/api/propriete');
  }

  getProprieteTypes(){
    return this.http.get('http://medimmo.ca/api/typepropriete');
  }

  postReservation(reservation){
    return this.http.post('http://medimmo.ca/api/reservation', reservation);
  }

  postContact(contact){
    return this.http.post('http://medimmo.ca/api/contact', contact);
  }
}
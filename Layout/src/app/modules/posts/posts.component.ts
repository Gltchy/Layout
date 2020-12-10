import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import places from 'places.js'
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @ViewChild('addressInput' , {static: false}) qElementRef: ElementRef;

  lat;lng;
  placesAutocomplete
  formPage: number = 0
  formStep1: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
  periods = [
    { value: 1, label: 1 },
    { value: 1, label: 1 },
    { value: 1, label: 1 }
  ]
  propertyType = [];
  actuel: any;
  year: any;
  basse: any;
  croissance: any;
  elevee: any;
  porcentage: any;
  yearAq =[];
  delais= [];

  constructor(fb: FormBuilder, private service : ServicesService) {
    this.formStep1 = fb.group({
      coordinates: fb.control('', Validators.required),
      aptNumber: fb.control('', Validators.required),
    });
    this.formStep2 = fb.group({
      name: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      phone: fb.control('', Validators.required),
      period: fb.control('', Validators.required),
    })
    this.formStep3 = fb.group({
      year: fb.control('', Validators.required),
      type: fb.control('', Validators.required),
      price: fb.control('', Validators.required),
      bedrooms: fb.control('', Validators.required),
    })

  }

  ngOnInit(): void {
    this.service.getProprieteTypes().subscribe((res : any)=>{
      res.data.forEach(element => {
        this.propertyType.push({value:element.name,label:element.name})
      });
    })
    this.service.getDelais().subscribe((res:any)=>{
      res.data.forEach(element => {
        this.delais.push({value:element.name,label:element.name})
      });
    })
    this.service.getAqui().subscribe((res:any)=>{
      res.data.forEach(element => {
        this.yearAq.push({value:element.name,label:element.name})
      });
    })
    setTimeout(() => {
      this.placesAutocomplete = places({
        appId: 'pl4CDAJILUX7',
        apiKey: '6d2d8be89a9898544521be7106fb42f9',
        container: this.qElementRef.nativeElement
      });
      this.placesAutocomplete.on('change', (e) => {     
        this.formStep1.controls['coordinates'].setValue(e.suggestion.value)
        this.lat=     e.suggestion.latlng.lat;
        this.lng=     e.suggestion.latlng.lng;

      });
    }, 100);

    
  }


  reset(){
    setTimeout(() => {
      this.placesAutocomplete = places({
        appId: 'pl4CDAJILUX7',
        apiKey: '6d2d8be89a9898544521be7106fb42f9',
        container: this.qElementRef.nativeElement
      });
      this.placesAutocomplete.on('change', (e) => {     
        this.formStep1.controls['coordinates'].setValue(e.suggestion.value)
        this.lat=     e.suggestion.latlng.lat;
        this.lng=     e.suggestion.latlng.lng;

      });
    }, 100);
  }

  estimate() {
    
    
    let info = {
      adress : this.formStep1.controls['coordinates'].value,
      apt : this.formStep1.controls['aptNumber'].value,
      nom : this.formStep2.controls['name'].value,
      mail : this.formStep2.controls['email'].value,
      telephone : this.formStep2.controls['phone'].value,
      delaisvente : this.formStep2.controls['period'].value,
      year : this.formStep3.controls['year'].value,
      type : this.formStep3.controls['type'].value,
      price : this.formStep3.controls['price'].value,
      bedrooms : this.formStep3.controls['bedrooms'].value,
    }
    this.service.postReservation(info).subscribe()
    this.service.getPropriete().subscribe((res : any)=>{
      this.actuel = res.data[0].actuelle;
      this.year = res.data[0].annee;
      this.basse = res.data[0].basse;
      this.croissance = res.data[0].croissance;
      this.elevee = res.data[0].elevee;
      this.porcentage = res.data[0].porcentage;

    })
    this.formStep1.reset()
    this.formStep2.reset()
    this.formStep3.reset()
    this.formPage = 3;
  }
}

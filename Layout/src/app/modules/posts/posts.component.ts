import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import places from 'places.js'
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

  constructor(fb: FormBuilder, private router: Router) {
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

    setTimeout(() => {
      this.placesAutocomplete = places({
        appId: 'pl4CDAJILUX7',
        apiKey: '6d2d8be89a9898544521be7106fb42f9',
        container: this.qElementRef.nativeElement
      });
      this.placesAutocomplete.on('change', (e) => {
        console.log(e.suggestion.latlng);        
        this.formStep1.controls['coordinates'].setValue([e.suggestion.latlng.lat,e.suggestion.latlng.lng])
        this.lat=     e.suggestion.latlng.lat;
        this.lng=     e.suggestion.latlng.lng;

      });
    }, 100);

    
  }

  estimate() {
    this.formPage = 3;
    console.log(this.formStep1.controls['coordinates'].value);
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  desc: any;
  photoSrc: any;

  constructor(service : ServicesService) { 
    service.getHomeInfo().subscribe((res : any)=>{
      this.desc = res.description;
      this.photoSrc = res.srcImg
    })
  }

  ngOnInit(): void {

  }

}

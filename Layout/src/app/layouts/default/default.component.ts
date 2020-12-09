import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/modules/services.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    
  }

}

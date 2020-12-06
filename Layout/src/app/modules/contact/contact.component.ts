import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form : FormGroup

  constructor(fb : FormBuilder) {
    this.form = fb.group({
      nameF: fb.control('', Validators.required),
      nameL: fb.control('', Validators.required),
      country: fb.control('', Validators.required),
      subject: fb.control('', Validators.required),
    })   
  }

  ngOnInit(): void {
  }

  sendMsg(){
    console.log("br");
    
  }

}

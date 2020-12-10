import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form : FormGroup

  constructor(fb : FormBuilder, private service : ServicesService) {
    this.form = fb.group({
      nameF: fb.control('', Validators.required),
      nameL: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      tel: fb.control('', Validators.required),
      subject: fb.control('', Validators.required),
    })   
  }

  ngOnInit(): void {
  }

  sendMsg(){
    let contact = {
      firstName : this.form.controls['nameF'].value,
      lastName : this.form.controls['nameL'].value,
      email : this.form.controls['email'].value,
      tel : this.form.controls['tel'].value,
      subject : this.form.controls['subject'].value
    }
    this.service.postContact(contact).subscribe()
    this.form.reset()
  }


}

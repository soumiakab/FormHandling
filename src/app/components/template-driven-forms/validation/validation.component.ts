import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

 contact:Contact;

  constructor() { }

  ngOnInit() {
    this.contact ={
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };

  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }


}

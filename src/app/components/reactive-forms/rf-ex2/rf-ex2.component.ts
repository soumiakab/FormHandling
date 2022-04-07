import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf-ex2',
  templateUrl: './rf-ex2.component.html',
  styleUrls: ['./rf-ex2.component.css']
})
export class RfEx2Component implements OnInit {

  constructor() { }

  ngOnInit() {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  onSubmit() {
    console.info(this.profileForm.value);
  }

}

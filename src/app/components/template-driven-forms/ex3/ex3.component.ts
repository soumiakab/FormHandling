import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}

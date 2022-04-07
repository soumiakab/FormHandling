import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rf-ex1',
  templateUrl: './rf-ex1.component.html',
  styleUrls: ['./rf-ex1.component.css']
})
export class RfEx1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Utilisez le constructeur de pour définir sa valeur initiale
  email = new FormControl(null);


  updateEmail() {
    this.email.setValue('email@gmail.com');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  userEmail: string;

  ngOnInit(): void {
  }


  displayValue() {
    console.log(this.userEmail);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-validators-event',
  templateUrl: './check-validators-event.component.html',
  styleUrls: ['./check-validators-event.component.css']
})
export class CheckValidatorsEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameControl = new FormControl(null, {
    validators: Validators.minLength(4),
    updateOn:'blur'
  });
}

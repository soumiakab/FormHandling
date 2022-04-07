import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rf-ex6',
  templateUrl: './rf-ex6.component.html',
  styleUrls: ['./rf-ex6.component.css']
})
export class RfEx6Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.printControls();

  }

  profileForm = this.formBuilder.group({
    lessons: this.formBuilder.array([
    ])
  });

  addControl() {
    const control = this.formBuilder.control('lesson1');
    (this.profileForm.controls.lessons as FormArray).push(control);
    this.printControls();

  }

  printControls() {
    console.log(this.profileForm.controls);
  }

  getLessons() {
    return this.profileForm.controls["lessons"] as FormArray;
  }

  deleteLesson() {
    if(this.getLessons().length >= 1){
      this.getLessons().removeAt(this.getLessons().length - 1);
      this.printControls();
    }
  }

  getLessonsValue() {

    const lessons = this.getLessons().getRawValue();
    console.log(lessons);
  }

}

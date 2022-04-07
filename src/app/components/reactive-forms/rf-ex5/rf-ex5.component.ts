import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf-ex5',
  templateUrl: './rf-ex5.component.html',
  styleUrls: ['./rf-ex5.component.css']
})
export class RfEx5Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.formBuilder.group({
    lessons: this.formBuilder.array([])
  });

  getLessons() {
    return this.profileForm.controls["lessons"] as FormArray;
  }


  addLesson() {
    const lessonForm = this.formBuilder.group({
        title: ['', Validators.required],
        level: ['beginner', Validators.required]
    });

    this.getLessons().push(lessonForm);

    console.log(this.profileForm.controls);

  }

  onSubmit() {
    console.info(this.profileForm.value);
  }
}

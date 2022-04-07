import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/match';

@Component({
  selector: 'app-dynamiclyvalidation',
  templateUrl: './dynamiclyvalidation.component.html',
  styleUrls: ['./dynamiclyvalidation.component.css']
})
export class DynamiclyvalidationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  formSubmitted : boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue],
          employed : [''],
          companyName: ['']
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  getf() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  handleValueChange(){
    this.registerForm.get('employed').valueChanges.subscribe(response => {
      console.log('check response is ', response);
      if(response == true){
        this.registerForm.get('companyName').setValidators(Validators.required);
      } else {
        this.registerForm.get('companyName').clearValidators();
      }
      this.registerForm.get('companyName').updateValueAndValidity();
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder) {}

  regForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(128),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(128),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(128),
    ]),
  });
  submit() {
    if (!this.regForm.valid) {
      alert('Some fields are not correct.');
      return;
    }
    const controls = this.regForm.controls;
    if (controls.password.value !== controls.confirmPassword.value) {
      alert('Password and confirm password should be the same.');
      return;
    }
    const formsData = this.regForm.getRawValue();
    //register(formsData);
  }
}

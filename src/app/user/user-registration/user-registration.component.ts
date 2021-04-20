import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  userSubmitted!: boolean;
  user!: User;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {

    this.registrationForm = this.createRegistrationForm();

  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.assignUserData());
      this.resetForm();//todo video 18
      this.userSubmitted = false;
      alertify.success("Registration Successful");
    } else {
      alertify.error("Kindly provide required valid informations");
    }


  }


  assignUserData(): User {
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


  //* this method return the registration form by creating
  private createRegistrationForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: [''],
      mobile: ['']

    }, {
      validators: this.passwordMatchingValidator //* Added custom validator here
    });
  }

  //* for resetting the form to blank 
  resetForm() {
    this.registrationForm.reset();
    this.userSubmitted = false;
  }



  //* custom validator for  confirming password
  passwordMatchingValidator(formGroup: AbstractControl): ValidationErrors | null {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value ? null : { notmatched: true };
  }


  // ------------------------------------
  // *Getter methods for all form controls
  // ------------------------------------
  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  // ------------------------
}

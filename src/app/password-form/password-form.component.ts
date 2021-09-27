import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../common/validators/password.validators';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  form: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        oldPassword: [
          '',
          [Validators.required],
          PasswordValidator.oldPasswordCheck,
        ],
        newPassword: ['', Validators.required],
        cnfPassword: ['', Validators.required],
      },
      {
        validator: PasswordValidator.passwordShouldMatch,
      }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get cnfPassword() {
    return this.form.get('cnfPassword');
  }
}

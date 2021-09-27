import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static oldPasswordCheck(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({ oldPasswordCheck: true });
      } else {
        resolve(null);
      }
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let cnfPassword = control.get('cnfPassword');

    if (newPassword?.value !== cnfPassword?.value) {
      return { passwordShouldMatch: true };
    }

    return null;
  }
}

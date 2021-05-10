import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { _validations } from '../utils/validateRuls';

@Injectable({
  providedIn: 'root',
})
export class ValidateFormService {
  constructor() {}

  public accessValidate = {
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,3}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  };
  
  public registerUserValidate = {
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,3}$'),
      ],
    ],
    sex: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  };

  /* ---------------------------------FUNCTIONS OF LIBRAY---------------------------------- */

  /**
   * Function for format the lenght of character
   * @param error // Get variable of validations for type of error
   * @param form // Get error message
   */
  lenghtValidations(error: any, form: any): String {
    return form.minlength
      ? error.msg.split('|')[0] +
          form.minlength.requiredLength +
          error.msg.split('|')[1]
      : error.msg;
  }

  getMessages(nameSelector: any, formValidator: any): String {
    let resp: String = '';

    for (let i = 0; i < _validations.length; i++) {
      if (
        formValidator.get(nameSelector).errors &&
        formValidator.get(nameSelector).dirty
      ) {
        if (
          formValidator.get(nameSelector).hasError(_validations[i].validator)
        ) {
          let aux: string = _validations[i].msg;
          if (formValidator.get(nameSelector).errors.minlength != undefined) {
            aux =
              this.lenghtValidations(
                _validations[i],
                formValidator.get(nameSelector).errors
              ) + '';
          }
          resp += aux;
        }
      }
    }

    return resp;
  }
}

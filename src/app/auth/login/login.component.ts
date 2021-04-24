import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateFormService } from 'src/app/services/validate-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user: UserModel;

  public validateAccessForm: FormGroup;

  public label = 'Acceso';
  public permanentAccess: any;

  constructor(
    private _fb: FormBuilder,
    public _validationsFormService: ValidateFormService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.user = new UserModel('', '', '', '', '', '', '', '');

    this.validateAccessForm = this._fb.group(
      this._validationsFormService.accessValidate
    );
  }

  onSubmit() {
    this._authService.login(this.user).subscribe((response) => {
      this.permanentAccess
        ? localStorage.setItem('token', response.token)
        : localStorage.removeItem('token');
      this._authService.token = response.token;
      this._router.navigate(['categories']);
    });
  }
}

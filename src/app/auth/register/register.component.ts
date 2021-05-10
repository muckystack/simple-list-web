import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ValidateFormService } from 'src/app/services/validate-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user: NewUserModel;

  public validateRegisterUserForm: FormGroup;

  public label = 'Registrate';
  public permanentAccess: any;

  public registrado = false;

  constructor(
    private _fb: FormBuilder,
    public _validationsFormService: ValidateFormService,
    private _authService: AuthService,
    private _loadingService: LoadingService,
    private _router: Router
  ) {
    this.user = new NewUserModel('', '', '', '');

    this.validateRegisterUserForm = this._fb.group(
      this._validationsFormService.registerUserValidate
    );
  }

  onSubmit() {
    this._loadingService.loading = true;
    this._authService.register(this.user).subscribe((response) => {
      this.registrado = true;
      this._loadingService.loading = false;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faPencilAlt,
  faUser,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  public icon = [faPencilAlt, faUser, faPowerOff];

  public user: UserModel;

  constructor(private _authService: AuthService, private _router: Router) {
    const _user: any = localStorage.getItem('user');
    const localUser: any = JSON.parse(_user);

    this.user = new UserModel(
      localUser.id,
      localUser.username,
      localUser.email,
      localUser.sex,
      '',
      localUser.role,
      localUser.status
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._authService.token = '';
    this._router.navigate(['auth']);
  }
}

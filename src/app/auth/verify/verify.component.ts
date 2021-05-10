import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {

  public success = false;
  public error = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.token = this._activatedRoute.snapshot.params.token;
    this._authService.verify().subscribe(
      response => {
        if (response.status.status.code == 'INTERNAL_SERVER_ERROR') {
          this.success = false;
          this.error = true;
        } else {
          this.success = true;
          this.error = true;
        }
      },
    );
  }
}

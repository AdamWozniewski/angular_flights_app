import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar,
  ) { }

  login(): void {
    this.authService.login(this.credentials)
      .then(user => this.router.navigate(['/dashboard']))
      .catch(err => this.toast.open(err.message));
  }
}

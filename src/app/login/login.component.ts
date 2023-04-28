import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  logoPath: string = "./assets/logo.svg";

  isEmailFocused: boolean = false;
  isPasswordFocused: boolean = false;

  loading: boolean = false;
  loginError: boolean = false;

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  onEmailFocus() {
    this.isEmailFocused = true;
    this.loginError = false;
  }

  onEmailBlur() {
    this.isEmailFocused = false;
  }

  onPasswordFocus() {
    this.isPasswordFocused = true;
    this.loginError = false;
  }

  onPasswordBlur() {
    this.isPasswordFocused = false;
  }

  handleLogin() {
    this.loading = true;
    this.authService.handleLogin(this.user).subscribe({
      next: data => {
        // console.log('DADOS', data)
        this.loading = false;
        this.router.navigate(['/opening']);
      },
      error: error => {
        this.loading = false;
        this.loginError = true;
        console.log('Erro ao realizar login.', error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}

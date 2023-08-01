import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('form') loginForm: NgForm | undefined;
  constructor(private userService: UserService, private router: Router,private api: ApiService){}

  login(): void {

    if(!this.loginForm) {
      return;
    }

    const form = this.loginForm;

    if(form.invalid){
      return;
    }

    const value: {
      email: string,
      password: string
    } = form.value;

    this.userService.login(value.email, value.password).subscribe({
      next: (response) => {
        if (response.accessToken) {
          this.api.clearSessionData();
          this.userService.isLoggedIn = true;

          this.api.dataSave('accessToken', response.accessToken);
          this.api.dataSave('userEmail', response.email);
          this.api.dataSave('userId', response._id);
          this.api.dataSave('username', response.username);

          console.log('Login successful!');
          this.router.navigate(['/']);
                   
        }
      },
      error: (error) => {
        this.api.showMessage(error.error.message);        
      }
    })
  }
}

import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('registerForm') registerForm : NgForm | undefined;

  constructor(private userService: UserService, private api: ApiService, private router: Router){}

  registerUser(): void {
    if(!this.registerForm){
      return;
    }

    const form = this.registerForm;

    if(form.invalid){
      return;
    }

    const value: {
      email: string,
      username: string,
      password: string,
      repassword: string
    } = form.value;

    this.userService.register(value.username, value.email, value.password).subscribe({
      next: (response) => {
        if (response.accessToken) {
          this.api.clearSessionData();
          this.userService.isLoggedIn = true;

          this.api.dataSave('accessToken', response.accessToken);
          this.api.dataSave('userEmail', response.email);
          this.api.dataSave('userId', response._id);
          this.api.dataSave('username', response.username);

          console.log('Registered successfully!');
          this.router.navigate(['/']);
        }
      }})
      
  }
}

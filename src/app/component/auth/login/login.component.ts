import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email?:string
password?:string
error?:string

constructor(private UserService : UserService, private router: Router){}

  onSubmit(form:NgForm) {
    if (form.invalid) {
      console.log('Form is invalid');
      return;
    }
    if (form.value) {
      const islogin = this.UserService.login(form.value)
      if (islogin) {
        this.router.navigate(['/']);
      } else{
      this.error = "mot de passe ou email incorrect"
      }
    }
  }
}

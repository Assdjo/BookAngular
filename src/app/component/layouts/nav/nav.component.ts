import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private userService:UserService, private router: Router) {}

  login():boolean {
    return this.userService.isLoginIn
  }
  
  logout() {
    this.userService.Logout()
    this.router.navigate(['/login'])
  }
}

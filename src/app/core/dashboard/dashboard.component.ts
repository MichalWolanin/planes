import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user = this.authService.user;


  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}

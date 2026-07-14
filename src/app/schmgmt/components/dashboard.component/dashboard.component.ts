import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  userMessage = '';
  adminMessage = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // 1. Hit the general role endpoint
    this.http.get('http://localhost:8082/api/dashboard/user', { responseType: 'text' }).subscribe({
      next: data => this.userMessage = data,
      error: () => this.userMessage = 'Access Denied to user metrics.'
    });

    // 2. Hit the strict administrator endpoint
    this.http.get('http://localhost:8082/api/dashboard/admin', { responseType: 'text' }).subscribe({
      next: data => this.adminMessage = data,
      error: () => this.adminMessage = 'Access Denied (Requires Admin Role).'
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileMenuOpen = false;  // Nueva propiedad

  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/auth']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

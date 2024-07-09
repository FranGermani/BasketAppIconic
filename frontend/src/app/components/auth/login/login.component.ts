import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService] // Asegúrate de agregar el servicio aquí si es necesario
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    // Uso del servicio AuthService para manejar la autenticación
    this.authService.login(username, password).subscribe(user => {
      if (user) {
        if (user.role === 'admin') {
          this.router.navigate(['/admin-panel']); // Redirige al panel del administrador
        } else {
          this.router.navigate(['/client-panel']); // Redirige al panel del cliente
        }
      } else {
        alert('Invalid credentials');
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/auth/register']); // Redirige al registro
  }

  enterAsGuest() {
    this.router.navigate(['/index']);
  }
}

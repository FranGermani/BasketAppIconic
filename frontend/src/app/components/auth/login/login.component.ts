import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  users = [
    { username: 'admin', password: 'admin' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.router.navigate(['/index']);
    } else {
      alert('Invalid credentials');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  enterAsGuest() {
    // Implementa la lógica para ingresar como invitado
    this.router.navigate(['/index']);
  }
}

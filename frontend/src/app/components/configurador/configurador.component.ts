import { Component } from '@angular/core';

@Component({
  selector: 'app-configurador',
  standalone: true,
  template: `<h1>BIENVENIDO AL PANEL DE CONTROL USUARIO ADMIN</h1>
  <h1>Configure sus herramientas adicionales</h1>`,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 20%;
      font-size: 3em;
      color: #0077ff;
    }
  `]
})
export class ConfiguradorComponent { }

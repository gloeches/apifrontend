import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiForm } from './features/api-form/api-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApiForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ApiFrontEnd');
}

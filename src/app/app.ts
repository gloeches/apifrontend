import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBar } from './features/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBar, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'ApiFrontEnd';
}

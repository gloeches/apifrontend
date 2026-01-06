import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBar } from './features/nav-bar/nav-bar';
import { ApiFormComponent } from './features/api-form/api-form';
import { CubeFormComponent } from './features/cube-form/cube-form';
import { About } from './features/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBar, RouterModule, ApiFormComponent, CubeFormComponent, About],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'ApiFrontEnd';
}

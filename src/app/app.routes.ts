import { Routes } from '@angular/router';
import { ApiFormComponent } from './features/api-form/api-form';
import { About } from './features/about/about';
import { CubeFormComponent } from './features/cube-form/cube-form';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'square', component: ApiFormComponent },
    { path: 'cube', component: CubeFormComponent },
    { path: 'about', component: About },
];

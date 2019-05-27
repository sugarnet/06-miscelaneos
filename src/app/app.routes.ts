import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

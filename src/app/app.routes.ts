import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClaseDetalleComponent } from './pages/clase-detalle/clase-detalle.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminFormTemplateComponent } from './pages/admin-form-template/admin-form-template.component';
import { AdminContactoComponent } from './pages/admin-contacto/admin-contacto.component';
import { RulesComponent } from './pages/rules/rules.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'clases/:id', component: ClaseDetalleComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'videos', loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent) },
  { path: 'reglas', component: RulesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin/form-template', component: AdminFormTemplateComponent, canActivate: [authGuard] },
  { path: 'admin/contacto', component: AdminContactoComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' } // ruta comodín por si no encuentra coincidencias
];

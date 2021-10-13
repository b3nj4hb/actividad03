import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContenidoComponent } from './contenido/contenido.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: 'contenido',component:ContenidoComponent},
{path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

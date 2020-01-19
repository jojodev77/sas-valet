import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  { path: '', component: SigninComponent, },
  {
    path: 'signin',
    loadChildren: () => import('../app/auth/signin/signin.component').then(mod => mod.SigninComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(mod => mod.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

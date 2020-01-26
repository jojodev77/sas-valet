import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** component */
import { AffaireContainerComponent } from './affaire-container/affaire-container.component';
import { AffaireCreateComponent } from './affaire-create/affaire-create.component';
import { SigninComponent } from '../auth/signin/signin.component';


const routes: Routes = [
  { path: 'affaire', component: AffaireContainerComponent, },
  { path: 'affaireCreate', component: SigninComponent, },

//   {
//     path: 'auth',
//     loadChildren: () => import('./').then(mod => mod.AuthModule)
//   },

  {
    path: 'affaireCreate',
    loadChildren: () => import('./affaire-create/affaire-create.component').then(mod => mod.AffaireCreateComponent)
  },
  {
    path: 'affaireCreate',
    loadChildren: () => import('./affaire-create/affaire-create.component').then(mod => mod.AffaireCreateComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffaireModuleRouting { }

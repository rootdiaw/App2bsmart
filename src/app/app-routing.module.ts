import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import { NewutilisateurComponent } from './modules/admin/newutilisateur/newutilisateur.component';
import {DasboardComponent} from './modules/dasboard/dasboard.component';
import {FooterComponent} from './shared/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      {
        path:'',
        component: DasboardComponent
      }
      ,
      {
        path:'user',
        component:NewutilisateurComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import { NewPerceptionsupComponent } from './modules/admin/new-perceptionsup/new-perceptionsup.component';
import { NewRebondinfoComponent } from './modules/admin/new-rebondinfo/new-rebondinfo.component';
import { NewSupprotparutionComponent } from './modules/admin/new-supprotparution/new-supprotparution.component';
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
        path:'newgam',
        component:NewutilisateurComponent
      },
      {
        path:'newsupportparution',
        component:NewSupprotparutionComponent
      },
      {
        path:'newperceptionsupportparution',
        component:NewPerceptionsupComponent
      }
      ,
      {
        path:'newrebondinfo',
        component:NewRebondinfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

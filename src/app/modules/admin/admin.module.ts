import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewutilisateurComponent } from './newutilisateur/newutilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { NewSupprotparutionComponent } from './new-supprotparution/new-supprotparution.component';
import { NewPerceptionsupComponent } from './new-perceptionsup/new-perceptionsup.component';
import { NewRebondinfoComponent } from './new-rebondinfo/new-rebondinfo.component';
import { FicherecaputComponent } from './ficherecaput/ficherecaput.component';

@NgModule({
  declarations: [NewutilisateurComponent,  NewSupprotparutionComponent,  NewPerceptionsupComponent, NewRebondinfoComponent, FicherecaputComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatStepperModule, 
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
  ]
})
export class AdminModule { }

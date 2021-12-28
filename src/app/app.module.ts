import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import {FullModule} from './layouts/full/full.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import {MatCardModule} from '@angular/material/card';
import { AdminModule } from './modules/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FullModule,
    HighchartsChartModule,
    MatCardModule,
    AdminModule

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

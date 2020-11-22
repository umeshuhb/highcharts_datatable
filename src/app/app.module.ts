import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardbodyComponent } from './dashboardbody/dashboardbody.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LanguageDetailsComponent } from './language-details/language-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardbodyComponent,
    LanguageDetailsComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

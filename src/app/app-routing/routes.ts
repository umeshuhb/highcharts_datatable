import { Routes } from '@angular/router';

import { LanguageDetailsComponent } from '../language-details/language-details.component';
import {DashboardbodyComponent} from '../dashboardbody/dashboardbody.component';
import {DatatableComponent} from '../datatable/datatable.component';
import { from } from 'rxjs';
export const routes: Routes = [
    { path: 'language',  component: LanguageDetailsComponent },
    { path: 'home',  component: DashboardbodyComponent },
    { path: 'datatable',  component:DatatableComponent  },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
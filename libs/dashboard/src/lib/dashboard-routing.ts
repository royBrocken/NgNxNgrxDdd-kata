import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './resolvers/dashboard.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: [DashboardResolver],
  },
];

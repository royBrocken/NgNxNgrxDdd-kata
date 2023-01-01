import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './features-dashboard-routing';
import { DashboardComponent } from './dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { dashboardFeatureKey, dashboardReducer } from './store/dashboard.reducers';
import { DashboardEffects } from './store/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(dashboardFeatureKey, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
})
export class FeaturesDashboardModule {}

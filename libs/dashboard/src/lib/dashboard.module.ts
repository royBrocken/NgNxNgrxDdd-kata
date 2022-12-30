import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard-routing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticlesEffects } from 'libs/articles/src/lib/store/articles.effects';
import {
  articlesFeatureKey,
  articlesReducer,
} from 'libs/articles/src/lib/store/articles.reducer';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(articlesFeatureKey, articlesReducer),
    EffectsModule.forFeature([ArticlesEffects]),
  ],
})
export class DashboardModule {}

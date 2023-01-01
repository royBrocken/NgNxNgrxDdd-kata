import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dashboard } from '@spacenews-domains/dashboard';
import { dashboardFeatureKey, DashboardState } from './dashboard.reducers';

const dashboardState = createFeatureSelector<DashboardState>(dashboardFeatureKey)

export const dashboard = createSelector(
  dashboardState,
  ({ dashboard }): Dashboard | undefined => dashboard
);

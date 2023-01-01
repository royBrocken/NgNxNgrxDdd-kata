import { ActionReducer, createReducer, on } from '@ngrx/store';
import { Dashboard } from '@spacenews-domains/dashboard';
import { getDashboard_Success } from './dashboard.actions';

export const dashboardFeatureKey = 'spacenews-dashboard';

export interface DashboardState {
  dashboard: Dashboard | undefined;
}

export const initialState: DashboardState = {
  dashboard: undefined,
};

export const dashboardReducer: ActionReducer<DashboardState> = createReducer(
  initialState,
  on(
    getDashboard_Success,
    (state: DashboardState, { dashboard }): DashboardState => {
      return {
        ...state,
        dashboard,
      };
    }
  )
);

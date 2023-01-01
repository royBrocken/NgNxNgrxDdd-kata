import { createAction, props } from '@ngrx/store';
import { Dashboard } from '@spacenews-domains/dashboard';

export const getDashboard = createAction('[@cf/dashboard ] getDashboard');

export const getDashboard_Success = createAction(
  '[@cf/dashboard ] getDashboard_Success',
  props<{ dashboard: Dashboard }>()
);

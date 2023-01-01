import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetDashboardUsecase } from '@spacenews-domains/dashboard';
import { switchMap } from 'rxjs';
import { getDashboard, getDashboard_Success } from './dashboard.actions';

@Injectable({ providedIn: 'root' })
export class DashboardEffects {
  getDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDashboard),
      switchMap(() =>
        this.getDashboardUsecase
          .execute()
          .pipe(switchMap((dashboard) => [getDashboard_Success({ dashboard })]))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getDashboardUsecase: GetDashboardUsecase
  ) {}
}

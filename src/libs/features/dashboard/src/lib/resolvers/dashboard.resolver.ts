import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { getDashboard } from '../store/dashboard.actions';
import { DashboardState } from '../store/dashboard.reducers';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<void> {
  constructor(private store: Store<DashboardState>) {}

  resolve(): void {
    this.store.dispatch(getDashboard());
  }
}

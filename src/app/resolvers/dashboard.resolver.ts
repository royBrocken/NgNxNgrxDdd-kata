import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/Dashboard';
import { DashboardService } from '../services/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<Observable<Dashboard>> {
  constructor(private dashboardService: DashboardService) {}

  resolve(): Observable<Dashboard> {
    return this.dashboardService.getDashboard();
  }
}

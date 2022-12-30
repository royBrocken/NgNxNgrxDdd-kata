import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  let fixture: DashboardResolver;
  let dashboardService: any;

  beforeEach(() => {
    dashboardService = {
      getDashboard: jest.fn(() => of(true)),
    };

    fixture = new DashboardResolver(dashboardService);
  });
  it('should call api to retrieve dashboard data', () => {
    fixture.resolve();

    expect(dashboardService.getDashboard).toHaveBeenCalledTimes(1);
  });
});

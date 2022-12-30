import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let fixture: DashboardService;
  let articlesService: any;

  beforeEach(() => {
    articlesService = {
      getArticlesCount: jest.fn(() => of(true)),
    };

    fixture = new DashboardService(articlesService);
  });
  it('should call api to retrieve dashboard data', () => {
    fixture.getDashboard();

    expect(articlesService.getArticlesCount).toHaveBeenCalledTimes(1);
  });
});

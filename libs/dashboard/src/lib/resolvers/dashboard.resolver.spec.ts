import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { getArticlesCount } from '../../../../articles/src';
import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  let fixture: DashboardResolver;
  let store: any;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(() => of(true)),
    };

    fixture = new DashboardResolver(store);
  });
  it('should call api to retrieve dashboard data', () => {
    fixture.resolve();

    expect(store.dispatch).toHaveBeenCalledWith(getArticlesCount());
  });
});

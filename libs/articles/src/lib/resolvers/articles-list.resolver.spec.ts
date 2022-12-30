import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { fetchArticles } from '../store/articles.actions';
import { ArticlesListResolver } from './articles-list.resolver';

describe('ArticlesResolver', () => {
  let fixture: ArticlesListResolver;
  let store: any;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(() => of(true)),
    };

    fixture = new ArticlesListResolver(store);
  });
  it('should dispatch action to retrieve articles', () => {
    fixture.resolve();

    expect(store.dispatch).toHaveBeenCalledWith(fetchArticles());
  });
});

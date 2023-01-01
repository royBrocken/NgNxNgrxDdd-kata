import {expect} from '@jest/globals';
import { of } from 'rxjs';
import { getArticle } from '../store/articles.actions';
import { ArticleResolver } from './article.resolver';

describe('ArticleResolver', () => {
  let fixture: ArticleResolver;
  let store: any;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(() => of(true)),
    };

    fixture = new ArticleResolver(store);
  });
  
  it('should call api to retrieve article by id', () => {
    fixture.resolve({ params: { articleId: 'test123' } } as any);

    expect(store.dispatch).toHaveBeenCalledWith(getArticle({ articleId: 'test123' }));
  });
});

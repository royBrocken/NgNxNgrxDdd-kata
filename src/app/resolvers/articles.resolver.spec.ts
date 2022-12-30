import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { ArticlesResolver } from './articles.resolver';

describe('ArticlesResolver', () => {
  let fixture: ArticlesResolver;
  let articleService: any;

  beforeEach(() => {
    articleService = {
      fetch: jest.fn(() => of(true)),
    };

    fixture = new ArticlesResolver(articleService);
  });
  it('should call api to retrieve article by id', () => {
    fixture.resolve();

    expect(articleService.fetch).toHaveBeenCalledTimes(1);
  });
});

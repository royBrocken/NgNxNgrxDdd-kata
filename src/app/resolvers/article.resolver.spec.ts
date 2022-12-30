import {expect} from '@jest/globals';
import { of } from 'rxjs';
import { ArticleResolver } from './article.resolver';

describe('ArticleResolver', () => {
  let fixture: ArticleResolver;
  let articleService: any;

  beforeEach(() => {
    articleService = {
      getById: jest.fn(() => of(true)),
    };

    fixture = new ArticleResolver(articleService);
  });
  it('should call api to retrieve article by id', () => {
    fixture.resolve({ params: { articleId: 'test123' } } as any);

    expect(articleService.getById).toHaveBeenCalledWith('test123');
  });
});

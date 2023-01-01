import { expect } from '@jest/globals';
import { of } from 'rxjs';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let fixture: ArticlesService;
  let http: any;

  beforeEach(() => {
    http = {
      get: jest.fn(() => of(true)),
    };

    fixture = new ArticlesService(http);
  });
  it('should call api to retrieve articles', () => {
    fixture.fetch();

    expect(http.get).toHaveBeenCalledWith(fixture.FETCH_ARTICLES);
  });

  it('should call api to retrieve article by id', () => {
    fixture.getById('test123');

    expect(http.get).toHaveBeenCalledWith(
      fixture.GET_ARTICLE_BY_ID('test123')
    );
  });

  it('should call api to retrieve articles count', () => {
    fixture.getArticlesCount();

    expect(http.get).toHaveBeenCalledWith(fixture.GET_ARTICLES_COUNT);
  });
});

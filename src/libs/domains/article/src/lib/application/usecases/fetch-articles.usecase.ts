import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticleEntity } from '../../domain/ArticleEntity';
import { ArticlesRepository } from '../../infrastructure/articles.repository';
import { HttpFetchMapper } from '../../infrastructure/http/mappers/http-fetch.mapper';

@Injectable({ providedIn: 'root' })
export class FetchArticlesUsecase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute(): Observable<ArticleEntity[]> {
    return this.articlesRepository
      .fetch()
      .pipe(map((articleDto) => new HttpFetchMapper().toEntity(articleDto)));
  }
}

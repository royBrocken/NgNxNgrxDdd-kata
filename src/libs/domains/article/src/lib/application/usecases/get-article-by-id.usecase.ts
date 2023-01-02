import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticleEntity } from '../../domain/ArticleEntity';
import { ArticlesRepository } from '../../infrastructure/articles.repository';
import { HttpGetByIdMapper } from '../../infrastructure/http/mappers/http-get-by-id.mapper';

@Injectable({ providedIn: 'root' })
export class GetArticleByIdUsecase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute(articleId: string): Observable<ArticleEntity> {
    return this.articlesRepository
      .getById(articleId)
      .pipe(map((articleDto) => new HttpGetByIdMapper().toEntity(articleDto)));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticlesRepository } from '../../infrastructure/articles.repository';

@Injectable({ providedIn: 'root'})
export class GetArticleByIdUsecase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute(articleId: string): Observable<Article> {
      return this.articlesRepository.getById(articleId);
  }
}

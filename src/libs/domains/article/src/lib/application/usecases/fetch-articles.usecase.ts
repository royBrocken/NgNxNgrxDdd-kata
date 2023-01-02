import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticlesRepository } from '../../infrastructure/articles.repository';

@Injectable({ providedIn: 'root'})
export class FetchArticlesUsecase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute(): Observable<Article[]> {
      return this.articlesRepository.fetch();
  }
}

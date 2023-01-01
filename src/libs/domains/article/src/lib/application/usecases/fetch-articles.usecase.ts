import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticlesService } from '../../infrastructure/articles.service';

@Injectable({ providedIn: 'root'})
export class fetchArticlesUsecase {
  constructor(private articlesService: ArticlesService) {}

  execute(): Observable<Article[]> {
      return this.articlesService.fetch();
  }
}

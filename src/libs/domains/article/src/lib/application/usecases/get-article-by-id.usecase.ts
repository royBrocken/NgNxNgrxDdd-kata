import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticlesService } from '../../infrastructure/articles.service';

@Injectable({ providedIn: 'root'})
export class GetArticleByIdUsecase {
  constructor(private articlesService: ArticlesService) {}

  execute(articleId: string): Observable<Article> {
      return this.articlesService.getById(articleId);
  }
}

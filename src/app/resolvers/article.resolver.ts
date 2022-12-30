import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { ArticlesService } from '../services/articles.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolver implements Resolve<Observable<Article>> {
  constructor(private articlesService: ArticlesService) {}

  resolve({
    params: { articleId },
  }: ActivatedRouteSnapshot): Observable<Article> {
    return this.articlesService.getById(articleId);
  }
}

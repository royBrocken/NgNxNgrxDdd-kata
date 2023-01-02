import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../domain/Article';

@Injectable({ providedIn: 'root' })
export abstract class ArticlesRepository {
  abstract BASE_URL: string;
  abstract GET_ARTICLES_COUNT: string;
  abstract FETCH_ARTICLES: string;
  abstract GET_ARTICLE_BY_ID: (articleId: string) => string;

  abstract fetch(): Observable<Article[]>;
  abstract getById(articleId: string): Observable<Article>;
  abstract getArticlesCount(): Observable<number>;
}

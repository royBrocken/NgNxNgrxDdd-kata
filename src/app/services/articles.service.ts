import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly BASE_URL = 'https://api.spaceflightnewsapi.net/v3/';

  readonly FETCH_ARTICLES = `${this.BASE_URL}articles`;
  readonly GET_ARTICLE_BY_ID = (articleId: string) => `${this.BASE_URL}articles/${articleId}`;

  constructor(private http: HttpClient) {}

  fetch(): Observable<Article[]> {
    return this.http.get<Article[]>(this.FETCH_ARTICLES);
  }

  getById(articleId: string): Observable<Article> {
    return this.http.get<Article>(this.GET_ARTICLE_BY_ID(articleId));
  }
}

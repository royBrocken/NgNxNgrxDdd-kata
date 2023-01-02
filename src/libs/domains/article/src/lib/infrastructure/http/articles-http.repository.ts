import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../domain/Article';
import { ArticlesRepository } from '../articles.repository';
import { HttpFetchResponse, HttpGetByIdResponse } from './dtos/responses.dto';

@Injectable({ providedIn: 'root' })
export class ArticlesHttpRepository extends ArticlesRepository {
  readonly BASE_URL = 'https://api.spaceflightnewsapi.net/v3/';

  readonly GET_ARTICLES_COUNT = `${this.BASE_URL}articles/count`;
  readonly FETCH_ARTICLES = `${this.BASE_URL}articles`;
  readonly GET_ARTICLE_BY_ID = (articleId: string): string =>
    `${this.BASE_URL}articles/${articleId}`;

  constructor(private http: HttpClient) {
    super()
  }

  fetch(): Observable<HttpFetchResponse> {
    return this.http.get<HttpFetchResponse>(this.FETCH_ARTICLES);
  }

  getById(articleId: string): Observable<HttpGetByIdResponse> {
    return this.http.get<HttpGetByIdResponse>(this.GET_ARTICLE_BY_ID(articleId));
  }

  getArticlesCount(): Observable<number> {
    return this.http.get<number>(this.GET_ARTICLES_COUNT);
  }
}

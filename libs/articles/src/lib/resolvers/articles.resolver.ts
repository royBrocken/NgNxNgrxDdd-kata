import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article, ArticlesService } from '@spacenews-api';

@Injectable({
  providedIn: 'root',
})
export class ArticlesResolver implements Resolve<Observable<Article[]>> {
  constructor(private articlesService: ArticlesService) {}

  resolve(): Observable<Article[]> {
    return this.articlesService.fetch();
  }
}

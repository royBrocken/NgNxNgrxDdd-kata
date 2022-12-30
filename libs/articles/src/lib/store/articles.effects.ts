import { Injectable } from '@angular/core';
import { ArticlesService } from '@spacenews-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchArticles, fetchArticles_Success, getArticle, getArticlesCount, getArticlesCount_Success, getArticle_Success } from './articles.actions';
import { switchMap } from 'rxjs';

@Injectable()
export class ArticlesEffects {
  fetchArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchArticles),
      switchMap(() =>
        this.articlesService
          .fetch()
          .pipe(switchMap((articles) => [fetchArticles_Success({ articles })]))
      )
    )
  );

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticle),
      switchMap(({ articleId }) =>
        this.articlesService
          .getById(articleId)
          .pipe(switchMap((selectedArticle) => [getArticle_Success({ selectedArticle })]))
      )
    )
  );

  getArticlesCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticlesCount),
      switchMap(() =>
        this.articlesService
          .getArticlesCount()
          .pipe(switchMap((articlesCount) => [getArticlesCount_Success({ articlesCount })]))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}

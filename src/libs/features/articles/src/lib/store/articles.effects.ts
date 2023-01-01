import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchArticlesUsecase,
  getArticleByIdUsecase,
  getArticlesCountUsecase,
} from 'libs/domains/article/src';
import { switchMap } from 'rxjs';
import {
  fetchArticles,
  fetchArticles_Success,
  getArticle,
  getArticlesCount,
  getArticlesCount_Success,
  getArticle_Success,
} from './articles.actions';

@Injectable()
export class ArticlesEffects {
  fetchArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchArticles),
      switchMap(() =>
        this.fetchArticlesUsecase
          .execute()
          .pipe(switchMap((articles) => [fetchArticles_Success({ articles })]))
      )
    )
  );

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticle),
      switchMap(({ articleId }) =>
        this.getArticleUsecase
          .execute(articleId)
          .pipe(
            switchMap((selectedArticle) => [
              getArticle_Success({ selectedArticle }),
            ])
          )
      )
    )
  );

  getArticlesCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticlesCount),
      switchMap(() =>
        this.getArticlesCountUsecase
          .execute()
          .pipe(
            switchMap((articlesCount) => [
              getArticlesCount_Success({ articlesCount }),
            ])
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fetchArticlesUsecase: fetchArticlesUsecase,
    private getArticleUsecase: getArticleByIdUsecase,
    private getArticlesCountUsecase: getArticlesCountUsecase
  ) {}
}

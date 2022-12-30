import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { getArticle } from '../store/articles.actions';
import { ArticlesState } from '../store/articles.reducer';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolver implements Resolve<void> {
  constructor(private store: Store<ArticlesState>) {}

  resolve({ params: { articleId } }: ActivatedRouteSnapshot): void {
    this.store.dispatch(getArticle({ articleId }));
  }
}

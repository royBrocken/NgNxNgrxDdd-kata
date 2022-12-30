import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchArticles } from '../store/articles.actions';

@Injectable({
  providedIn: 'root',
})
export class ArticlesListResolver implements Resolve<void> {
  constructor(private store: Store) {}

  resolve(): void {
    return this.store.dispatch(fetchArticles());
  }
}

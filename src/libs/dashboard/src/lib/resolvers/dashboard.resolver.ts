import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<void> {
  // constructor(private store: Store<ArticlesState>) {}

  resolve(): void {
    // this.store.dispatch(getArticlesCount());
  }
}

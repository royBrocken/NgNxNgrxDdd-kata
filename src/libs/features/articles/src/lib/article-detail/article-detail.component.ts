import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearSelectedArticle } from '../store/articles.actions';
import { articleDetail } from '../store/articles.selectors';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  vm$!: Observable<ReturnType<typeof articleDetail>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(articleDetail));
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearSelectedArticle());
  }
}

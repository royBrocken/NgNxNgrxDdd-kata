import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Article } from '@spacenews-api';
import { Observable } from 'rxjs';
import { selectedArticle } from '../store/articles.selectors';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.article$ = this.store.pipe(select(selectedArticle));
  }
}

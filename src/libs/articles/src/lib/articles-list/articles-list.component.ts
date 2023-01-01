import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Article } from '@spacenews-api';
import { Observable } from 'rxjs';
import { ArticlesState } from '../store/articles.reducer';
import { articles } from '../store/articles.selectors';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit(): void {
      this.articles$ = this.store.pipe(select(articles));
  }
}

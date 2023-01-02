import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Article } from '@spacenews-domains/article';
import { Observable } from 'rxjs';
import { ArticlesState } from '../store/articles.reducer';
import { articleList } from '../store/articles.selectors';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {
  vm$!: Observable<ReturnType<typeof articleList>>;

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(articleList));
  }
}

import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
})
export class ArticleListItemComponent {
  @Input() article!: Article;
  @Input() isHeader = false;
}

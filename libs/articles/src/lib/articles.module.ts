import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './articles-routing';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleListItemComponent } from './articles-list/article-list-item/article-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticlesListComponent,
    ArticleListItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class ArticlesModule {}

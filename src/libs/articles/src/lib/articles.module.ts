import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './articles-routing';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleListItemComponent } from './articles-list/article-list-item/article-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { articlesFeatureKey, articlesReducer } from './store/articles.reducer';
import { ArticlesEffects } from './store/articles.effects';

@NgModule({
  declarations: [
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticlesListComponent,
    ArticleListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(articlesFeatureKey, articlesReducer),
    EffectsModule.forFeature([ArticlesEffects]),
  ],
})
export class ArticlesModule {}

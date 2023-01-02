import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routes } from './features-articles-routing';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleListItemComponent } from './articles-list/article-list-item/article-list-item.component';
import { articlesFeatureKey, articlesReducer } from './store/articles.reducer';
import { ArticlesEffects } from './store/articles.effects';
import { LetModule, PushModule } from '@ngrx/component';

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
    LetModule,
    PushModule,
    StoreModule.forFeature(articlesFeatureKey, articlesReducer),
    EffectsModule.forFeature([ArticlesEffects]),
  ],
})
export class FeaturesArticlesModule {}

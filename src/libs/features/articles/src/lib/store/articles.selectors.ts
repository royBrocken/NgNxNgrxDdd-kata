import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleEntity } from '@spacenews-domains/article';
import { articlesFeatureKey, ArticlesState } from './articles.reducer';

const articlesState = createFeatureSelector<ArticlesState>(articlesFeatureKey);

export const articleList = createSelector(articlesState, ({ articles }) => ({
  articles: (articles ?? []).map((article) => new ArticleEntity(article)),
}));

export const articleDetail = createSelector(
  articlesState,
  ({ selectedArticle }) => ({
    selectedArticle: selectedArticle
      ? new ArticleEntity(selectedArticle)
      : undefined,
  })
);

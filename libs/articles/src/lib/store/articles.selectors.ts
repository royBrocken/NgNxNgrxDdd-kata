import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articlesFeatureKey, ArticlesState } from './articles.reducer';

const articlesState = createFeatureSelector<ArticlesState>(articlesFeatureKey);

export const articles = createSelector(
  articlesState,
  ({ articles }) => articles ?? []
);

export const selectedArticle = createSelector(
  articlesState,
  ({ selectedArticle }) => selectedArticle
);

export const articlesCount = createSelector(
  articlesState,
  ({ articlesCount }) => articlesCount ?? 0
);

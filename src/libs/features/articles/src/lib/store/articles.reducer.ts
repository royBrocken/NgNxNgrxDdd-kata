import { ActionReducer, createReducer, on } from '@ngrx/store';
import { Article } from '@spacenews-domains/article';
import { clearSelectedArticle, fetchArticles_Success, getArticlesCount_Success, getArticle_Success } from './articles.actions';

export const articlesFeatureKey = 'spacenews-articles';

export interface ArticlesState {
  articles?: Article[];
  selectedArticle?: Article;
  articlesCount?: number;
}

export const initialState: ArticlesState = {
  articles: undefined,
  selectedArticle: undefined,
  articlesCount: undefined,
};

export const articlesReducer: ActionReducer<ArticlesState> = createReducer(
  initialState,
  on(
    fetchArticles_Success,
    (state: ArticlesState, { articles }): ArticlesState => {
      return {
        ...state,
        articles,
      };
    }
  ),
  on(
    getArticle_Success,
    (state: ArticlesState, { selectedArticle }): ArticlesState => {
      return {
        ...state,
        selectedArticle,
      };
    }
  ),
  on(
    getArticlesCount_Success,
    (state: ArticlesState, { articlesCount }): ArticlesState => {
      return {
        ...state,
        articlesCount,
      };
    }
  ),
  on(
    clearSelectedArticle,
    (state: ArticlesState): ArticlesState => {
      return {
        ...state,
        selectedArticle: undefined,
      };
    }
  )
);

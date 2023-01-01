import { createAction, props } from '@ngrx/store';
import { Article } from '@spacenews-api';

export const fetchArticles = createAction(
  '[@cf/Articles] fetchArticles',
);

export const fetchArticles_Success = createAction(
    '[@cf/Articles] fetchArticles_Success',
    props<{ articles: Article[]}>()
);

export const getArticle = createAction(
  '[@cf/Articles] getArticle',
  props<{ articleId: string }>()
  );

export const getArticle_Success = createAction(
    '[@cf/Articles] getArticle_Success',
    props<{ selectedArticle: Article}>()
);

export const getArticlesCount = createAction(
  '[@cf/Articles] getArticlesCount',
);

export const getArticlesCount_Success = createAction(
    '[@cf/Articles] getArticlesCount_Success',
    props<{ articlesCount: number}>()
);
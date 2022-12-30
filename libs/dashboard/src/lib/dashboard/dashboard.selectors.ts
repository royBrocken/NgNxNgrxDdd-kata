import { createSelector } from '@ngrx/store';
import { Dashboard } from '@spacenews-api';
import { articlesCount } from '@spacenews-articles';

export const dashboard = createSelector(
  articlesCount,
  (articlesCount): Dashboard => ({
    articlesCount,
  })
);

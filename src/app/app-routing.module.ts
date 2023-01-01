import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@spacenews-features/dashboard').then(
        (m) => m.FeaturesDashboardModule
      ),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('@spacenews-features/articles').then(
        (m) => m.FeaturesArticlesModule
      ),
  },
];

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@spacenews-dashboard').then((m) => m.DashboardModule),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('@spacenews-features/articles').then((m) => m.FeaturesArticlesModule),
  },
];

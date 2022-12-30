import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesResolver } from './resolvers/articles.resolver';
import { ArticleResolver } from './resolvers/article.resolver';
import { DashboardResolver } from './resolvers/dashboard.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      dashboard: DashboardResolver,
    }
  },
  {
    path: 'articles',
    component: ArticlesListComponent,
    resolve: {
      articles: ArticlesResolver
    }
  },
  {
    path: 'articles/create',
    component: ArticleCreateComponent,
  },
  {
    path: 'articles/:articleId',
    component: ArticleDetailComponent,
    resolve: {
      article: ArticleResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

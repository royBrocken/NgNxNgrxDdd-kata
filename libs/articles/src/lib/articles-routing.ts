import { Routes } from "@angular/router";
import { ArticleCreateComponent } from "./article-create/article-create.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { ArticleResolver } from "./resolvers/article.resolver";
import { ArticlesResolver } from "./resolvers/articles.resolver";

export const routes: Routes = [
    {
        path: '',
        component: ArticlesListComponent,
        resolve: {
          articles: ArticlesResolver,
        },
      },
      {
        path: 'create',
        component: ArticleCreateComponent,
      },
      {
        path: ':articleId',
        component: ArticleDetailComponent,
        resolve: {
          article: ArticleResolver,
        },
      },
    
]
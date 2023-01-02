import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesHttpRepository } from './infrastructure/http/articles-http.repository';
import { ArticlesRepository } from './infrastructure/articles.repository';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: ArticlesRepository, useClass: ArticlesHttpRepository}
  ]
})
export class DomainsArticleModule {}

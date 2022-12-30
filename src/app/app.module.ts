import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleListItemComponent } from './articles/articles-list/article-list-item/article-list-item.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleListItemComponent,
    DashboardComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleListItemComponent } from './articles/articles-list/article-list-item/article-list-item.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleListItemComponent,
    MenuComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

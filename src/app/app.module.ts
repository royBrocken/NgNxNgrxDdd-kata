import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { ApiModule } from '@spacenews-api';
import { MenuModule } from '@spacenews-menu';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ApiModule, MenuModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

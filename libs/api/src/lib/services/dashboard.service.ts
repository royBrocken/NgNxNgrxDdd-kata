import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiModule } from '../api.module';
import { Dashboard } from '../models/Dashboard';
import { ArticlesService } from './articles.service';

@Injectable({ providedIn: ApiModule })
export class DashboardService {
  constructor(private articlesService: ArticlesService) {}

  getDashboard(): Observable<Dashboard> {
    return this.articlesService
      .getArticlesCount()
      .pipe(map((articlesCount) => ({ articlesCount })));
  }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dashboard } from '../models/Dashboard';
import { ArticlesService } from './articles.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private articlesService: ArticlesService) {}

  getDashboard(): Observable<Dashboard> {
    return this.articlesService
      .getArticlesCount()
      .pipe(map((articlesCount) => ({ articlesCount })));
  }
}

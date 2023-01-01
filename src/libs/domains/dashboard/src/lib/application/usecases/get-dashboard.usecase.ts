import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dashboard } from '../../domain/Dashboard';
import { GetArticlesCountUsecase } from '@spacenews-domains/article'

@Injectable({ providedIn: 'root' })
export class GetDashboardUsecase {
  constructor(private getArticlesCountUsecase: GetArticlesCountUsecase) {}

  execute(): Observable<Dashboard> {
    return this.getArticlesCountUsecase.execute().pipe(
      map((articlesCount) => ({
        articlesCount,
      }))
    );
  }
}

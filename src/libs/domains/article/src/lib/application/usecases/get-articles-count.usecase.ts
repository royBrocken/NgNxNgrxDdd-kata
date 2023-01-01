import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../infrastructure/articles.service';

@Injectable({ providedIn: 'root'})
export class GetArticlesCountUsecase {
  constructor(private articlesService: ArticlesService) {}

  execute(): Observable<number> {
    return this.articlesService.getArticlesCount();
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesRepository } from '../../infrastructure/articles.repository';

@Injectable({ providedIn: 'root'})
export class GetArticlesCountUsecase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute(): Observable<number> {
    return this.articlesRepository.getArticlesCount();
  }
}

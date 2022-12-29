import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../models/Article';
import { ArticlesService } from '../services/articles.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolver implements Resolve<Observable<Article[]>> {
  constructor(private articlesService: ArticlesService) { }
  
  resolve(): Observable<Article[]> {
    return this.articlesService.fetch()
  }
}

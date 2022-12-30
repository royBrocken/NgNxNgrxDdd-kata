import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@spacenews-api';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {
  articles!: Article[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ articles }) => {
      this.articles = articles;
    });
  }
}

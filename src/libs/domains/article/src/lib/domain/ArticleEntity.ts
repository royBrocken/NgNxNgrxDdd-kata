import { Article } from './Article';
import { Entity } from '@spacenews-domains/shared';

export interface ArticleEntity extends Article {}

export class ArticleEntity extends Entity<Article> {
  constructor({
    id,
    title,
    url,
    imageUrl,
    publisher: newsSite,
    summary,
    publishedAt,
  }: Article) {
    super();

    this.id = id;
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.publisher = newsSite;
    this.summary = summary;
    this.publishedAt = publishedAt;
  }

    tagline(): string {
      return `${this.title.substring(0, 30)}.... / ${this.publishedAt} by ${this.publisher}`
  }

  toModel(): Article {
    return { ...this };
  }
}

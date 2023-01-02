import { ArticleEntity } from "../../../domain/ArticleEntity";
import { HttpArticleDto } from "../dtos/article.dto";

// Helper function for mappers
export function articleDtoToEntity(dto: HttpArticleDto): ArticleEntity {
    return new ArticleEntity({
      id: dto.id,
      title: dto.title,
      url: dto.url,
      imageUrl: dto.imageUrl,
      publisher: dto.newsSite,
      summary: dto.summary,
      publishedAt: dto.publishedAt,
    });
  }
  
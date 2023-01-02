import { Mapper } from "@spacenews-domains/shared";
import { Article } from "../../../domain/Article";
import { ArticleEntity } from "../../../domain/ArticleEntity";
import { HttpArticleDto } from "../dtos/article.dto";
import { HttpFetchResponse } from "../dtos/responses.dto";
import { articleDtoToEntity } from "./article-dto-to-entity.tool";

export class HttpFetchMapper
  implements Mapper<HttpFetchResponse, ArticleEntity[], Article[]>
{
  toDto(_entity: ArticleEntity[]): HttpFetchResponse {
    throw 'not implemented';
  }

  toEntity(dto: HttpFetchResponse): ArticleEntity[] {
    return dto.map((articleDto: HttpArticleDto) =>
      articleDtoToEntity(articleDto)
    );
  }

  toModel(dto: HttpFetchResponse): Article[] {
    return this.toEntity(dto).map((article) => article.toModel());
  }
}

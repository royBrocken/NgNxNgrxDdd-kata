import { Mapper } from '@spacenews-domains/shared';
import { Article } from '../../../domain/Article';
import { ArticleEntity } from '../../../domain/ArticleEntity';
import { HttpGetByIdResponse } from '../dtos/responses.dto';
import { articleDtoToEntity } from './article-dto-to-entity.tool';

export class HttpGetByIdMapper
  implements Mapper<HttpGetByIdResponse, ArticleEntity, Article>
{
  toDto(_entity: ArticleEntity): HttpGetByIdResponse {
    throw 'not implemented';
  }

  toEntity(dto: HttpGetByIdResponse): ArticleEntity {
    return articleDtoToEntity(dto);
  }

  toModel(dto: HttpGetByIdResponse): Article {
    return this.toEntity(dto).toModel();
  }
}

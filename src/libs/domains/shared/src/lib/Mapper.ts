export interface Mapper<Dto, Entity, Model> {
    toDto(entity: Entity): Dto;
    toEntity(dto: Dto): Entity;
    toModel(dto: Dto): Model;
  }
  
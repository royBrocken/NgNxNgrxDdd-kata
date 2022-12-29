# NgNxNgrxDdd kata
- Progress from a simple ng app to an nx monorepo.  
- Evolve from standard ng structure to ddd onion architecture
- Resolve questions about the onion structure

# Steps to develop
## 1. Ng v15 standard app
- Base feature: list/detail-view/create-update
- Routing, resolvers, http service, reactive form + validation
- Bootstrap responsive and sass color overrides
- Root menu ui
- Jest tests for services and resolvers

## 2. Nx and ngrx
- Move feature to nx lib
- Add ngrx with app store and store for feature
- Share store data between feature store and app component

## 3. DDD and Onion
- Create DDD elements: Entity, Dtos, Mappers, Usecases
- Create a context from feature business rules
- Move Domain and UI into separate nx libs

## 4. Dressings
- Essential components: Notifications, Loader, Collection
- Effects base class
- Cypress page tests

# Questions to answer
## Global strategy for store
- Shared/public api of stores in different levels - app/domain/feature
- Location of 'source of truth' 
    - in app root store
    - in each domain with public api
    - in feature/ui level store


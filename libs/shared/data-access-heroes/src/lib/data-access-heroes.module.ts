import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    HeroService
  ]
})
export class DataAccessHeroesModule {
  static forRoot(): ModuleWithProviders<DataAccessHeroesModule> {
    return {
      ngModule: DataAccessHeroesModule,
      providers: [
        HeroService
      ]
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';

@NgModule({
  imports: [CommonModule, DataAccessHeroesModule],
  declarations: [HeroDetailComponent]
})
export class FeatureHeroDetailsModule {}

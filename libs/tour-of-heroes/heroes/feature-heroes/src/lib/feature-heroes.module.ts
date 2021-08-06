import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';

@NgModule({
  imports: [CommonModule, RouterModule, DataAccessHeroesModule],
  declarations: [HeroesComponent]
})
export class FeatureHeroesModule {}

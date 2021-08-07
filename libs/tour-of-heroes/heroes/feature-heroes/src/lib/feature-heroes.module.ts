import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';

const routes: Routes = [
  { path: '', component: HeroesComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataAccessHeroesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent]
})
export class FeatureHeroesModule {}

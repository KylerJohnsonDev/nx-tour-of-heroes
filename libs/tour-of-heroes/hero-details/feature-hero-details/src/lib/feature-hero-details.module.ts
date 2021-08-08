import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: ':id', component: HeroDetailComponent },
]

@NgModule({
  imports: [
    CommonModule,
    DataAccessHeroesModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent]
})
export class FeatureHeroDetailsModule {}

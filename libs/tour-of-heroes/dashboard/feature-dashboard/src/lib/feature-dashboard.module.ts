import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataAccessHeroesModule
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
})
export class FeatureDashboardModule {}

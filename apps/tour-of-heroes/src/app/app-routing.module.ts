import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('@toh/feature-dashboard').then(m => m.FeatureDashboardModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('@toh/feature-hero-details').then(m => m.FeatureHeroDetailsModule)
  },
  // { path: 'detail/:id', component: HeroDetailComponent },
  {
    path: 'heroes',
    loadChildren: () => import('@toh/feature-heroes').then(m => m.FeatureHeroesModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsComponent } from './pages/champions/champions.component';
import { WinnersYearComponent } from './pages/winners-year/winners-year.component';

const routes: Routes = [
  {
    path: 'winners/:season/champion/:permanentNumber',
    component: WinnersYearComponent,
  },
  { path: '', component: ChampionsComponent },
  { path: '**', component: ChampionsComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

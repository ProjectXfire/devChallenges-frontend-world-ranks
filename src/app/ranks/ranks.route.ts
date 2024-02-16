import { Routes } from '@angular/router';
// Pages
import { CountryComponent, RanksComponent } from './pages';

export const ranksRoute: Routes = [
  { path: '', title: 'Ranks', component: RanksComponent },
  { path: ':name', title: 'Country', component: CountryComponent },
  { path: '**', redirectTo: '' },
];

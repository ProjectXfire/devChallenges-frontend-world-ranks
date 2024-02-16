import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'World Ranks',
    loadChildren: () => import('./ranks/ranks.route').then((m) => m.ranksRoute),
  },
];

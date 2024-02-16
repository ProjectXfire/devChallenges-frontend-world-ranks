import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesApiService } from '@app/ranks/services';
import { INeighbouring } from 'src/core/interfaces';

@Component({
  selector: 'app-neighbouring-detail',
  standalone: true,
  imports: [],
  templateUrl: './neighbouring-detail.component.html',
  styleUrl: './neighbouring-detail.component.css',
})
export class NeighbouringDetailComponent {
  @Input() neighbouring: INeighbouring[] = [];

  constructor(
    private router: Router,
    public countriesApiService: CountriesApiService
  ) {}

  handleNavigateToCountry(name: string) {
    this.router.navigate([`/${name}`]);
  }
}

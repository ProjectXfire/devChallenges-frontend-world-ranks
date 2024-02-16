import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { type ICountryDetail } from 'src/core/interfaces';
import { HeaderDetailComponent } from '../header-detail/header-detail.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { NeighbouringDetailComponent } from '../neighbouring-detail/neighbouring-detail.component';
import { CountriesApiService } from '@app/ranks/services';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [
    MatIconModule,
    HeaderDetailComponent,
    ContentDetailComponent,
    NeighbouringDetailComponent,
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css',
})
export class CountryDetailComponent {
  constructor(
    private router: Router,
    public countriesApiService: CountriesApiService
  ) {}

  @Input() country: ICountryDetail | null = null;

  handleNavigateToRanks() {
    this.router.navigate(['/']);
  }
}

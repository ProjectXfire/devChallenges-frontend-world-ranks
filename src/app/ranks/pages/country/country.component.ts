import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailComponent } from '@app/ranks/components';
import { CountriesApiService } from '@app/ranks/services';
import { BackgroundComponent } from '@app/shared/components';
import { country } from '@app/shared/mock';
import { type ICountryDetail } from 'src/core/interfaces';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [BackgroundComponent, CountryDetailComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  constructor(
    private route: ActivatedRoute,
    private countriesApiService: CountriesApiService
  ) {}

  country: ICountryDetail | null = null;

  ngOnInit(): void {
    //this.country = country;
    this.route.params.subscribe((params) => {
      const { name } = params;
      this.countriesApiService.getCountryByName(name).subscribe({
        error: (err) => console.log(err),
        next: (data) => {
          this.country = data;
        },
        complete: () => {
          this.countriesApiService.setLoading = false;
        },
      });
    });
  }
}

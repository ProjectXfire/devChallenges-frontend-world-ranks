import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CountriesService } from '@app/ranks/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public countriesService: CountriesService) {
    const countriesSubs$ = this.countriesService.getCountriesObs.subscribe(
      (data) => {
        this.totalCountries = data.length;
      }
    );
    this.subscription = [countriesSubs$];
  }

  subscription: Subscription[] = [];
  timer: NodeJS.Timeout | null = null;
  totalCountries: number = 0;

  handleInputSearch(e: KeyboardEvent) {
    const { value } = e.target as HTMLInputElement;
    if (this.timer) clearTimeout(this.timer);
    if (value === this.countriesService.getValue) return;
    this.timer = setTimeout(() => {
      this.countriesService.searchCountries(value);
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.forEach((subs) => {
      subs.unsubscribe();
    });
  }
}

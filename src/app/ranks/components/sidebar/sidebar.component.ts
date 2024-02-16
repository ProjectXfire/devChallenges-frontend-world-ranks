import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  type TOption,
  sortOptions,
  regions,
  status,
} from '@app/shared/contants';
import { CountriesService, type ISort } from '@app/ranks/services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public countriesService: CountriesService) {}

  @ViewChild('sort') sortRef!: ElementRef;
  isOpenMenu = signal<boolean | null>(null);

  sortOptions: TOption[] = sortOptions;
  regions: TOption[] = regions;
  status: TOption[] = status;

  handleMenu() {
    this.isOpenMenu.set(!this.isOpenMenu());
  }

  handleMenuOption(sort: TOption) {
    this.countriesService.sortCountries(sort.value as ISort);
    this.isOpenMenu.set(false);
  }

  handleSelectedRegions(region: TOption) {
    const regions = { ...this.countriesService.getFilterByRegions };
    if (regions[region.value]) {
      delete regions[region.value];
    } else {
      regions[region.value] = true;
    }
    this.countriesService.filterCountriesByRegions(regions);
  }

  handleStatus(status: TOption) {
    const statusValue = { ...this.countriesService.getFilterByStatus };
    if (statusValue[status.value]) {
      statusValue[status.value] = false;
    } else {
      statusValue[status.value] = true;
    }
    this.countriesService.filterCountriesByStatus(statusValue);
  }
}

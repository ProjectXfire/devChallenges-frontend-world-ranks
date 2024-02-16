import { Injectable, signal } from '@angular/core';
import { countries } from '@app/shared/mock';
import { BehaviorSubject } from 'rxjs';
import { type ICountry } from 'src/core/interfaces';

export type ISort = 'name' | 'population' | 'area';
type IFilters = {
  byValue: string;
  sortBy: ISort;
  byRegions: Record<string, boolean>;
  byStatus: Record<string, boolean>;
};

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  private countries: ICountry[] = [];
  private countries$ = new BehaviorSubject<ICountry[]>([]);
  private filters = signal<IFilters>({
    byValue: '',
    sortBy: 'population',
    byRegions: {},
    byStatus: {
      unMember: false,
      independent: false,
    },
  });

  setCountries(): void {
    this.countries = countries;
    this.sortCountries('population');
    this.filters.set({ ...this.filters(), sortBy: 'population' });
  }

  get getCountriesObs() {
    return this.countries$.asObservable();
  }

  get getValue() {
    return this.filters().byValue;
  }

  get getSort() {
    return this.filters().sortBy;
  }

  get getFilterByRegions() {
    return this.filters().byRegions;
  }

  get getFilterByStatus() {
    return this.filters().byStatus;
  }

  private sort(sortBy: ISort, data: ICountry[]): ICountry[] {
    if (sortBy === 'name') {
      const sorted = data.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        return 0;
      });
      return sorted;
    }
    const sorted = data.sort((a, b) => b[sortBy] - a[sortBy]);
    return sorted;
  }

  private filterByRegions(
    regions: Record<string, boolean>,
    data: ICountry[]
  ): ICountry[] {
    const regionsKeys = Object.keys(regions);
    if (regionsKeys.length === 0) return data;
    const filtered = data.filter((country) =>
      regionsKeys.includes(country.region.toLowerCase())
    );
    return filtered;
  }

  private filterByStatus(status: Record<string, boolean>, data: ICountry[]) {
    if (Object.values(status).every((v) => v === false)) return data;
    if (Object.values(status).every((v) => v === true)) {
      return data.filter(
        (country) => country.independent === true && country.unMember === true
      );
    }
    if (status['independent'] === true)
      return data.filter((country) => country.independent === true);
    if (status['unMember'] === true)
      return data.filter((country) => country.unMember === true);
    return data;
  }

  private filterByValue(value: string, data: ICountry[]): ICountry[] {
    if (!value) return data;
    const filtered = data.filter(
      (country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase()) ||
        country.region.toLowerCase().includes(value.toLowerCase()) ||
        country.subregion.toLowerCase().includes(value.toLowerCase())
    );
    return filtered;
  }

  private setFilters(): void {
    const initData = structuredClone(this.countries);
    const sorted = this.sort(this.filters().sortBy, initData);
    const filteredByValue = this.filterByValue(this.filters().byValue, sorted);
    const filteredByRegions = this.filterByRegions(
      this.filters().byRegions,
      filteredByValue
    );
    const filtereByStatus = this.filterByStatus(
      this.filters().byStatus,
      filteredByRegions
    );
    this.countries$.next(filtereByStatus);
  }

  searchCountries(value: string) {
    this.filters.set({ ...this.filters(), byValue: value });
    this.setFilters();
  }

  sortCountries(sortBy: ISort): void {
    this.filters.set({ ...this.filters(), sortBy });
    this.setFilters();
  }

  filterCountriesByRegions(regions: Record<string, boolean>) {
    this.filters.set({ ...this.filters(), byRegions: regions });
    this.setFilters();
  }

  filterCountriesByStatus(status: Record<string, boolean>) {
    this.filters.set({ ...this.filters(), byStatus: status });
    this.setFilters();
  }
}

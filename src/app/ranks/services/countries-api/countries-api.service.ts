import { HttpClient, type HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { type INeighbouring, type ICountryDetail } from 'src/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  private loading = signal<boolean>(true);

  constructor(private http: HttpClient) {}

  set setLoading(value: boolean) {
    this.loading.set(value);
  }

  get getLoading() {
    return this.loading();
  }

  getCountryByName(name: string): Observable<ICountryDetail> {
    this.setLoading = true;
    return this.http
      .get<ICountryDetail[]>(
        `${environment.countriesApi}/name/${name}?fullText=true&fields=name,population,region,area,flags,independent,unMember,subregion,languages,currencies,capital,borders`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.message);
        }),
        map((countries) => countries[0]),
        switchMap((data) => {
          if (data.borders.length === 0) return of(data);
          return this.getNeighbouringCountries(data.borders).pipe(
            map((values) => {
              const excludeNulls = values.filter(
                (v) => v !== null
              ) as INeighbouring[];
              data.neighbouring = excludeNulls;
              return data;
            })
          );
        })
      );
  }

  getNeighbouringCountries(
    countriesCode: string[]
  ): Observable<(INeighbouring | null)[]> {
    const request: Observable<INeighbouring | null>[] = [];
    countriesCode.forEach((code) => {
      request.push(
        this.http
          .get<INeighbouring>(
            `${environment.countriesApi}/alpha/${code}?fields=name,flags`
          )
          .pipe(
            catchError(() => {
              return of(null);
            }),
            map((country) => {
              if (!country) return null;
              return country;
            })
          )
      );
    });
    return forkJoin(request);
  }
}

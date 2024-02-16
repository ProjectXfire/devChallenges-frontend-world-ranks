import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { type ICountry } from 'src/core/interfaces';
import { NumberFormatPipe } from '@app/shared/pipes';
import { CountriesService } from '@app/ranks/services';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NumberFormatPipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {
    this.countriesService.setCountries();
    this.dataSource = new MatTableDataSource();
    const countriesSubs$ = this.countriesService.getCountriesObs.subscribe(
      (data) => {
        this.dataSource.data = data;
      }
    );
    this.subscription = [countriesSubs$];
  }

  subscription: Subscription[] = [];
  displayedColumns: string[] = ['flag', 'name', 'population', 'area', 'region'];
  dataSource: MatTableDataSource<ICountry>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnDestroy() {
    this.subscription.forEach((subs) => {
      subs.unsubscribe();
    });
  }

  handleSelectCountry(row: ICountry) {
    this.router.navigate([`/${row.name.common}`]);
  }
}

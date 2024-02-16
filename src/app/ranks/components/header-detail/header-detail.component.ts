import { Component, Input } from '@angular/core';
import { CountriesApiService } from '@app/ranks/services';
import { ChipComponent } from '@app/shared/components';
import { NumberFormatPipe } from '@app/shared/pipes';

@Component({
  selector: 'app-header-detail',
  standalone: true,
  imports: [NumberFormatPipe, ChipComponent],
  templateUrl: './header-detail.component.html',
  styleUrl: './header-detail.component.css',
})
export class HeaderDetailComponent {
  constructor(public countriesApiService: CountriesApiService) {}

  @Input() name: string = '';
  @Input() officialName: string = '';
  @Input() area: number = 0;
  @Input() population: number = 0;
}

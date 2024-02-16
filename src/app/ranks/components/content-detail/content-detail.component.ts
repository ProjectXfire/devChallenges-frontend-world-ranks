import { Component, Input } from '@angular/core';
import { CountriesApiService } from '@app/ranks/services';
import { ObjectInfoPipe } from '@app/shared/pipes';

type IContentData = {
  capital: string[];
  subregion: string;
  languages: Record<string, any>;
  currencies: Record<string, any>;
  region: string;
};

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [ObjectInfoPipe],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.css',
})
export class ContentDetailComponent {
  constructor(public countriesApiService: CountriesApiService) {}

  @Input() data: IContentData = {
    capital: [],
    region: '',
    subregion: '',
    currencies: {},
    languages: {},
  };
}

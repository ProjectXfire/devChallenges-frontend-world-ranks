import { Component } from '@angular/core';
import { RanksBoardComponent } from '@app/ranks/components';
import { BackgroundComponent } from '@app/shared/components';

@Component({
  selector: 'app-ranks',
  standalone: true,
  imports: [BackgroundComponent, RanksBoardComponent],
  templateUrl: './ranks.component.html',
  styleUrl: './ranks.component.css',
})
export class RanksComponent {}

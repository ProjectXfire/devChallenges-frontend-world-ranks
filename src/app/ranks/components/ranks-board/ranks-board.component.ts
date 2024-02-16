import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-ranks-board',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, TableComponent],
  templateUrl: './ranks-board.component.html',
  styleUrl: './ranks-board.component.css',
})
export class RanksBoardComponent {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksBoardComponent } from './ranks-board.component';

describe('RanksBoardComponent', () => {
  let component: RanksBoardComponent;
  let fixture: ComponentFixture<RanksBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RanksBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RanksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

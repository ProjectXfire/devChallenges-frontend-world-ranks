import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbouringDetailComponent } from './neighbouring-detail.component';

describe('NeighbouringDetailComponent', () => {
  let component: NeighbouringDetailComponent;
  let fixture: ComponentFixture<NeighbouringDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighbouringDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeighbouringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCounterComponent } from './series-counter.component';

describe('SeriesCounterComponent', () => {
  let component: SeriesCounterComponent;
  let fixture: ComponentFixture<SeriesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

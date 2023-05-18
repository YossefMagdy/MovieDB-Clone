import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTrailerSliderComponent } from './latest-trailer-slider.component';

describe('LatestTrailerSliderComponent', () => {
  let component: LatestTrailerSliderComponent;
  let fixture: ComponentFixture<LatestTrailerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTrailerSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTrailerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

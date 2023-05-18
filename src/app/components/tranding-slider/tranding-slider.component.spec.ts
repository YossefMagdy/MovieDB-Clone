import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingSliderComponent } from './tranding-slider.component';

describe('TrandingSliderComponent', () => {
  let component: TrandingSliderComponent;
  let fixture: ComponentFixture<TrandingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

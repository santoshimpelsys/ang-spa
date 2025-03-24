import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidJourneyComponent } from './mid-journey.component';

describe('MidJourneyComponent', () => {
  let component: MidJourneyComponent;
  let fixture: ComponentFixture<MidJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MidJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

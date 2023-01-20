import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFlightsComponent } from './modify-flights.component';

describe('ModifyFlightsComponent', () => {
  let component: ModifyFlightsComponent;
  let fixture: ComponentFixture<ModifyFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TravelGuard } from './travel.guard';

describe('TravelGuard', () => {
  let guard: TravelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TravelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

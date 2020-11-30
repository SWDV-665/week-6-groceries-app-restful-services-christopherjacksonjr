import { TestBed } from '@angular/core/testing';

import { GroceriesServiceProvider } from './groceries-service.service';

describe('GroceriesServiceProvider', () => {
  let service: GroceriesServiceProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesServiceProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

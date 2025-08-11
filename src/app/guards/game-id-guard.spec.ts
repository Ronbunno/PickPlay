import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gameIdGuard } from './game-id-guard';

describe('gameIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gameIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

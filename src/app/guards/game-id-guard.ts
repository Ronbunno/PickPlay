import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { gamesData } from '../data/games.data';

export const gameIdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));
  const exists = gamesData.some(game => game.id === id);

  if (!exists) {
    router.navigate(['/not-found']);
    return false;
  }

  return true;
};

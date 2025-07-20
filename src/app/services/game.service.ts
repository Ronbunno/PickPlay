import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Game } from '../models/game.model';
import { gamesData } from '../data/games.data';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private popularGameIds: Set<number> = new Set([8, 4, 18, 15, 12, 10]);
  private featuredGameIds: Set<number> = new Set([20, 4, 3, 8]);
  private topGameIds: Set<number> = new Set([18,17,15,14,16,12,10,8]);
  private pcGameIds: Set<number> = new Set([18, 17, 15, 14, 13, 12, 11]);
  private getThreecardsIds: Set<number> = new Set([1, 20,3]);

  getGames(): Observable<Game[]> {
    return of(gamesData);
  }

  getGameById(id: number): Observable<Game[]> {
    return of(gamesData.filter(g => g.id === id));
  }

  getPopularGames(): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => this.popularGameIds.has(game.id)))
    );
  }

  getFeaturedGames(): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => this.featuredGameIds.has(game.id)))
    );
  }

  getTopGames(): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => this.topGameIds.has(game.id)))
    );
  }

  getPcGames(): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => this.pcGameIds.has(game.id)))
    );
  }

  getThreecards(): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => this.getThreecardsIds.has(game.id)))
    );
  }
}

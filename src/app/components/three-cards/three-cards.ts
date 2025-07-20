import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-three-cards',
  imports: [
    RouterLink
  ],
  templateUrl: './three-cards.html',
  styleUrl: './three-cards.css'
})
export class ThreeCards implements OnInit {
  public threeCards: Game[] = [];
  constructor(private gameService: GameService) {}
  ngOnInit() {
    this.gameService.getThreecards().subscribe(games => {
      this.threeCards = games;
    });
  }
}


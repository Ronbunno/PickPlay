import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
     // console.log('Received games data: ', data);
      this.games = data;
    });
  }
}

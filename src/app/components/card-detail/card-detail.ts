import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Location is correctly imported
import { Location } from '@angular/common';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import {Scroll} from '../scroll/scroll';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, Scroll],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css'
})
export class CardDetail implements OnInit {
  game: Game | undefined;
  // MODIFIED: Property to hold top games
  topGames: Game[] = [];
  selectedScreenshot: string | undefined;
  isDescriptionExpanded = false;
  showDownloadModal = false;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.gameService.getGameById(id).subscribe(gamesArray => {
        if (gamesArray.length > 0) {
          this.game = gamesArray[0];

          if (this.game.screenshot?.length > 0) {
            this.selectedScreenshot = this.game.screenshot[0];
          }
          // MODIFIED: Call the new method to fetch top games
          this.fetchTopGames();
        }
      });
    });
  }

  // MODIFIED: Method now fetches top games from the service
  fetchTopGames(): void {
    this.gameService.getTopGames().subscribe(games => {
      this.topGames = games.filter(g => g.id !== this.game?.id);
    });
  }

  onDownloadClick(): void {
    this.showDownloadModal = true;
  }

  closeModal(): void {
    this.showDownloadModal = false;
  }

  goBack(): void {
    this.location.back();
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-pc-games',
  imports: [
    RouterLink
  ],
  templateUrl: './pc-games.html',
  styleUrl: './pc-games.css'
})
export class PcGames implements OnInit {
  pcGames: Game[] = [];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getPcGames().subscribe(games => {
      this.pcGames = games;
    });
  }

  scrollLeft(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -336, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: 336, behavior: 'smooth' });
  }
}

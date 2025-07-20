import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {GameService} from '../../services/game.service';
import { Game } from '../../models/game.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-scroll',
  imports: [
    RouterLink
  ],
  templateUrl: './scroll.html',
  styleUrl: './scroll.css'
})
export class Scroll implements OnInit {
  popularGames: Game[] = [];
  constructor(private gameService: GameService) {}
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  ngOnInit() {
    // Call the service to get popular games
    this.gameService.getPopularGames().subscribe(games => {
      // Assign the result to our component's property
      this.popularGames = games;
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

import { Component,OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-slide-show',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.css'
})
export class Slideshow implements OnInit, OnDestroy {

  public games: Game[] = [];
  public slideIndex = 0;
  private slideInterval: any;

  constructor(
    private gameService: GameService,
    //private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getFeaturedGames().subscribe(featuredGames => {
      this.games = featuredGames;
      this.startSlideshow();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  private startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.showNextSlide();
    }, 5000); // Change slide every 3 seconds
  }
  private showNextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.games.length;
  }
  public currentSlide(index: number): void {
    this.slideIndex = index;
    clearInterval(this.slideInterval);
    this.startSlideshow();
  }

}

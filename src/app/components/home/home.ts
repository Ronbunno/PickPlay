import { Component } from '@angular/core';
import {CardList} from '../card-list/card-list';
import {Scroll} from '../scroll/scroll';
import {Slideshow} from '../slide-show/slide-show';
import {PcGames} from '../pc-games/pc-games';
import {ThreeCards} from '../three-cards/three-cards';


@Component({
  selector: 'app-home',
  imports: [
    CardList,
    Scroll,
    Slideshow,
    PcGames,
    ThreeCards
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

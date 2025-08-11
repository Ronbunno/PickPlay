import {Routes } from '@angular/router';
import {Home} from './components/home/home';
import {CardDetail} from './components/card-detail/card-detail';
import {NotFound} from './components/not-found/not-found';
import {About} from './components/about/about';
import {Comming} from './components/comming/comming';
import { Contact } from './components/contact/contact';
import {Copyright} from './components/copyright/copyright';
import { Faq } from './components/faq/faq';
import {gameIdGuard} from './guards/game-id-guard';

export const routes: Routes = [
  {path:'', component: Home},
  { path: 'game/:id', component: CardDetail,canActivate: [gameIdGuard] },
  { path: 'about', component: About },
  { path: 'coming', component: Comming },
  { path: 'contact', component: Contact},
  {path: 'copyright', component: Copyright},
  {path: 'faq', component: Faq},
  { path: '**', component: NotFound}
];


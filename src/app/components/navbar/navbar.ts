import {Component, DOCUMENT, Inject, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
    }
  }
  get uiClasses() {
    const isOpen = this.isMenuOpen;
    return {
      nav: isOpen ? 'bg-black text-black' : 'bg-black/50 text-white',
      logo: isOpen ? 'text-red-500' : '',
      barOne: isOpen ? 'rotate-45 translate-y-[11px]' : '',
      barTwo: isOpen ? 'opacity-0' : '',
      barThree: isOpen ? '-rotate-45 -translate-y-[11px]' : '',
      menu: isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0',
    };
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InstagramReelsComponent } from './shared/instagram-reels/instagram-reels.component';

/**
 * Root App Component
 * Shell layout: Header → main content (router-outlet) → Instagram Reels → Footer
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InstagramReelsComponent],
  template: `
    <app-header />
    <main id="main-content" role="main">
      <router-outlet />
    </main>
    <app-instagram-reels />
    <app-footer />
  `,
  styles: [`
    main {
      min-height: 100vh;
      padding-top: 80px; /* Account for fixed header */
    }
  `]
})
export class AppComponent {}

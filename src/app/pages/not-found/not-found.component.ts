import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * 404 Not Found Page
 * Displays when the user navigates to an invalid route.
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="not-found" aria-label="Page not found">
      <div class="not-found__bg"></div>
      <div class="container not-found__content">
        <h1 class="not-found__code">404</h1>
        <h2 class="not-found__title">Page Not Found</h2>
        <p class="not-found__desc">The page you're looking for doesn't exist or has been moved.</p>
        <a routerLink="/" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Go Back Home
        </a>
      </div>
    </section>
  `,
  styles: [`
    .not-found {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .not-found__bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.05);
      filter: blur(100px);
      pointer-events: none;
    }
    .not-found__content {
      text-align: center;
      position: relative;
      z-index: 1;
    }
    .not-found__code {
      font-size: clamp(6rem, 15vw, 12rem);
      font-weight: 800;
      line-height: 1;
      background: linear-gradient(135deg, #8B5CF6, #A855F7, #C084FC);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
      filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.3));
      margin-bottom: 1rem;
    }
    .not-found__title {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }
    .not-found__desc {
      font-size: 1rem;
      color: var(--color-subtext);
      margin-bottom: 2rem;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class NotFoundComponent {}

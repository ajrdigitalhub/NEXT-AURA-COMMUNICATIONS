import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramReel } from '../../core/models/interfaces';

/**
 * Instagram Reels Component
 * Displays a horizontal scrollable row of Instagram reel thumbnails.
 * Shown above the footer on every page.
 */
@Component({
  selector: 'app-instagram-reels',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="instagram-section" aria-label="Instagram Reels">
      <div class="container">
        <!-- Heading -->
        <div class="instagram-section__header">
          <div class="instagram-section__title-row">
            <svg class="instagram-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <h2 class="instagram-section__title">Follow Us on Instagram</h2>
          </div>
          <p class="instagram-section__subtitle">Stay updated with our latest projects and behind-the-scenes content</p>
        </div>

        <!-- Reels Grid -->
        <div class="instagram-section__reels">
          @for (reel of reels; track $index) {
            <a
              [href]="reel.reelUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="reel-card"
              [attr.aria-label]="'Watch reel: ' + reel.caption">
              <div class="reel-card__thumbnail">
                <!-- Placeholder thumbnail -->
                <div class="reel-card__placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                </div>
                <!-- Play button overlay -->
                <div class="reel-card__play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
              <span class="reel-card__caption">{{ reel.caption }}</span>
            </a>
          }
        </div>

        <!-- Follow Button -->
        <div class="instagram-section__follow">
          <a
            href="https://www.instagram.com/nextauracommunications"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary instagram-section__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow &#64;nextauracommunications
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .instagram-section {
      padding: 4rem 0 3rem;
      border-top: 1px solid var(--color-border);
      background: linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.03));
    }
    .instagram-section__header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .instagram-section__title-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
    .instagram-icon {
      color: var(--color-primary);
    }
    .instagram-section__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
    }
    .instagram-section__subtitle {
      font-size: 0.9rem;
      color: var(--color-subtext);
    }

    /* Reels grid - horizontal scroll on mobile, grid on desktop */
    .instagram-section__reels {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .reel-card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .reel-card:hover {
      transform: translateY(-4px);
    }
    .reel-card:hover .reel-card__thumbnail {
      border-color: var(--color-primary);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
    }
    .reel-card:hover .reel-card__play {
      opacity: 1;
    }

    .reel-card__thumbnail {
      position: relative;
      aspect-ratio: 9 / 14;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--color-border);
      background: var(--color-card);
      transition: all 0.3s ease;
    }
    .reel-card__placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-subtext);
      opacity: 0.3;
    }
    .reel-card__play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    .reel-card__caption {
      font-size: 0.75rem;
      color: var(--color-subtext);
      text-align: center;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .instagram-section__follow {
      text-align: center;
    }
    .instagram-section__btn {
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .instagram-section__reels {
        grid-template-columns: repeat(4, 1fr);
      }
      .reel-card:nth-child(n+5) {
        display: none;
      }
    }
    @media (max-width: 768px) {
      .instagram-section__reels {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 0.5rem;
        gap: 0.75rem;
      }
      .reel-card {
        flex: 0 0 120px;
        scroll-snap-align: start;
        display: flex !important;
      }
      .reel-card:nth-child(n+5) {
        display: flex !important;
      }
      .instagram-section__reels::-webkit-scrollbar {
        height: 4px;
      }
      .instagram-section__reels::-webkit-scrollbar-track {
        background: transparent;
      }
      .instagram-section__reels::-webkit-scrollbar-thumb {
        background: var(--color-border);
        border-radius: 2px;
      }
    }
  `]
})
export class InstagramReelsComponent {
  @Input() reels: InstagramReel[] = [
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Our Telecalling Process' },
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Client Success Story' },
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Behind The Scenes' },
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Lead Generation Tips' },
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Digital Marketing Insights' },
    { thumbnailUrl: '', reelUrl: 'https://www.instagram.com/nextauracommunications', caption: 'Team Culture' }
  ];
}

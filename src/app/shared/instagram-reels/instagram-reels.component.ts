import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Instagram Reels Component
 * Uses Elfsight widget to display live Instagram feed.
 */
@Component({
  selector: 'app-instagram-reels',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="ig-section" aria-label="Instagram Feed">
      <div class="container">

        <!-- Header -->
        <div class="ig-header">
          <div class="ig-header__brand">
            <div class="ig-gradient-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                   fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h2 class="ig-title">Follow Us on Instagram</h2>
          </div>
          <p class="ig-subtitle">Stay updated with our latest projects and behind-the-scenes content</p>
        </div>

        <!-- Elfsight Widget -->
        <div class="ig-widget-wrap">
          <div class="elfsight-app-b87e4b9b-c907-4075-939a-c9a644b61870" data-elfsight-app-lazy></div>
        </div>

        <!-- Follow CTA -->
        <div class="ig-cta">
          <a href="https://www.instagram.com/nextaura_communications?utm_source=qr&igsh=MXNoZnBza2Vtd2ZkZw=="
             target="_blank" rel="noopener noreferrer" class="ig-cta__btn">
            <div class="ig-cta__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                   fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            Follow &#64;nextaura_communications
          </a>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .ig-section {
      padding: 4rem 0 3.5rem;
      border-top: 1px solid var(--color-border);
      background: var(--color-bg);
    }

    /* Header */
    .ig-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .ig-header__brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
    .ig-gradient-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .ig-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      margin: 0;
    }
    .ig-subtitle {
      font-size: 0.9rem;
      color: var(--color-subtext);
      margin: 0;
    }

    /* Widget wrapper */
    .ig-widget-wrap {
      margin-bottom: 2rem;
      border-radius: 16px;
      overflow: hidden;
    }

    /* CTA */
    .ig-cta {
      display: flex;
      justify-content: center;
    }
    .ig-cta__btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      color: #fff;
      background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
      box-shadow: 0 4px 20px rgba(253, 29, 29, 0.3);
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .ig-cta__btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 28px rgba(253, 29, 29, 0.45);
    }
    .ig-cta__icon {
      width: 28px;
      height: 28px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
  `]
})
export class InstagramReelsComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Load Elfsight script dynamically if not already loaded
    if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    } else {
      // If script already loaded, re-initialize widgets
      if ((window as any).eapps) {
        (window as any).eapps.AppsManager.reinit();
      }
    }
  }
}

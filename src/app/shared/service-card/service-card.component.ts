import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../core/models/interfaces';

/**
 * Service Card Component
 * Dark glassmorphism card with icon, title, description, and hover glow.
 */
@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="service-card glass-card" [attr.id]="'service-' + (service.slug || '')">
      <div class="service-card__icon" [innerHTML]="service.icon"></div>
      <h3 class="service-card__title">{{ service.title }}</h3>
      <p class="service-card__desc">{{ service.description }}</p>
      @if (showLink) {
        <a routerLink="/services" fragment="{{ service.slug }}" class="service-card__link">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      }
    </div>
  `,
  styles: [`
    .service-card {
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--color-gradient);
      transform: scaleX(0);
      transition: transform 0.35s ease;
    }
    .service-card:hover::before {
      transform: scaleX(1);
    }
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 40px rgba(139, 92, 246, 0.15);
    }
    .service-card__icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: rgba(139, 92, 246, 0.1);
      color: var(--color-primary);
    }
    .service-card__icon :global(svg) {
      width: 28px;
      height: 28px;
    }
    .service-card__title {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
      color: var(--color-text);
    }
    .service-card__desc {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--color-subtext);
      margin-bottom: 1rem;
    }
    .service-card__link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
      transition: var(--transition);
    }
    .service-card__link:hover {
      gap: 0.75rem;
      color: var(--color-secondary);
    }
  `]
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
  @Input() showLink: boolean = true;
}

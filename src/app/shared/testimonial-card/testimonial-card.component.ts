import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../core/models/interfaces';

/**
 * Testimonial Card Component
 * Glassmorphism card with star rating, quote, customer name & company.
 */
@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial-card glass-card">
      <!-- Quote icon -->
      <div class="testimonial-card__quote">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      <!-- Stars -->
      <div class="testimonial-card__stars" [attr.aria-label]="testimonial.rating + ' out of 5 stars'">
        @for (star of getStars(); track $index) {
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        }
      </div>

      <!-- Review text -->
      <p class="testimonial-card__review">{{ testimonial.review }}</p>

      <!-- Author -->
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar">
          {{ getInitials() }}
        </div>
        <div>
          <h4 class="testimonial-card__name">{{ testimonial.name }}</h4>
          <span class="testimonial-card__company">{{ testimonial.company }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .testimonial-card {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .testimonial-card__quote {
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    .testimonial-card__stars {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }
    .star {
      color: #F59E0B;
    }
    .testimonial-card__review {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--color-subtext);
      flex: 1;
      margin-bottom: 1.5rem;
      font-style: italic;
    }
    .testimonial-card__author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .testimonial-card__avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--color-gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--color-text);
    }
    .testimonial-card__name {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-text);
    }
    .testimonial-card__company {
      font-size: 0.8rem;
      color: var(--color-subtext);
    }
  `]
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;

  getStars(): number[] {
    return Array.from({ length: this.testimonial.rating }, (_, i) => i);
  }

  getInitials(): string {
    return this.testimonial.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}

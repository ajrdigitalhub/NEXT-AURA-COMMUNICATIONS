import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * CTA Section Component
 * Reusable call-to-action banner with gradient background and glassmorphism.
 */
@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="cta-section" [attr.aria-label]="heading">
      <div class="cta-section__bg"></div>
      <div class="container cta-section__content">
        <h2 class="cta-section__heading">{{ heading }}</h2>
        @if (subtext) {
          <p class="cta-section__subtext">{{ subtext }}</p>
        }
        <div class="cta-section__actions">
          <a [routerLink]="buttonRoute" class="btn btn-primary btn-lg">{{ buttonText }}</a>
          @if (secondaryText) {
            <a [href]="secondaryLink" class="btn btn-secondary btn-lg">{{ secondaryText }}</a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      position: relative;
      padding: 5rem 0;
      overflow: hidden;
    }
    .cta-section__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.05));
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }
    .cta-section__bg::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.06);
      filter: blur(80px);
    }
    .cta-section__content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .cta-section__heading {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
    }
    .cta-section__subtext {
      font-size: 1.05rem;
      color: var(--color-subtext);
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    .cta-section__actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .btn-lg {
      padding: 1rem 2.5rem;
      font-size: 1rem;
    }
  `]
})
export class CtaSectionComponent {
  @Input({ required: true }) heading!: string;
  @Input() subtext?: string;
  @Input() buttonText: string = 'Contact Us Today';
  @Input() buttonRoute: string = '/contact';
  @Input() secondaryText?: string;
  @Input() secondaryLink?: string;
}

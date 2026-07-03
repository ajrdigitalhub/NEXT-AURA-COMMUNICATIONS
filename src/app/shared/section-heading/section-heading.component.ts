import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Section Heading Component
 * Reusable heading with title, subtitle, and purple accent line.
 */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-heading" [class.center]="alignment === 'center'" [class.left]="alignment === 'left'">
      @if (subtitle) {
        <span class="section-heading__subtitle">{{ subtitle }}</span>
      }
      <h2 class="section-heading__title">{{ title }}</h2>
      <div class="accent-line" [class.mx-auto]="alignment === 'center'"></div>
    </div>
  `,
  styles: [`
    .section-heading {
      margin-bottom: 3.5rem;
    }
    .section-heading.center {
      text-align: center;
    }
    .section-heading.left {
      text-align: left;
    }
    .section-heading__subtitle {
      display: inline-block;
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--color-primary);
      margin-bottom: 0.75rem;
    }
    .section-heading__title {
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    .accent-line {
      width: 60px;
      height: 4px;
      background: var(--color-gradient);
      border-radius: 2px;
      margin-top: 1rem;
    }
  `]
})
export class SectionHeadingComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() alignment: 'center' | 'left' = 'center';
}

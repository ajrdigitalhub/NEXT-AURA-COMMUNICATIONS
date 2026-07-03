import { Component, Input, AfterViewInit, ElementRef, ViewChildren, QueryList, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatItem } from '../../core/models/interfaces';
import { AnimationService } from '../../core/services/animation.service';

/**
 * Stats Counter Component
 * Animated number counters that trigger on scroll.
 */
@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-grid">
      @for (stat of stats; track stat.label) {
        <div class="stat-item">
          <span class="stat-item__value" #counterEl>0</span>
          <span class="stat-item__suffix">{{ stat.suffix }}</span>
          <p class="stat-item__label">{{ stat.label }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      padding: 3rem 0;
    }
    .stat-item {
      text-align: center;
      padding: 1.5rem;
    }
    .stat-item__value {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--color-primary);
      text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
    .stat-item__suffix {
      font-family: var(--font-heading);
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      color: var(--color-primary);
    }
    .stat-item__label {
      font-size: 0.9rem;
      color: var(--color-subtext);
      margin-top: 0.5rem;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }
    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class StatsCounterComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) stats!: StatItem[];
  @ViewChildren('counterEl') counterElements!: QueryList<ElementRef>;

  private readonly animationService = inject(AnimationService);

  ngAfterViewInit(): void {
    this.counterElements.forEach((el, index) => {
      this.animationService.animateCounter(
        el.nativeElement,
        this.stats[index].value,
        2,
        this.stats[index].suffix
      );
    });
  }

  ngOnDestroy(): void {
    this.animationService.cleanup();
  }
}

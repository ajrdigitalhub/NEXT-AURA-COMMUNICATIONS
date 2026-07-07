import { Component, Input, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Carousel Component
 * Auto-sliding image carousel with fade transitions and touch/swipe support.
 */
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="carousel"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
      (mouseenter)="pauseAutoPlay()"
      (mouseleave)="resumeAutoPlay()"
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel">

      <!-- Slides -->
      <div class="carousel__slides">
        @for (slide of slides; track $index) {
          <div
            class="carousel__slide"
            [class.active]="$index === currentIndex()"
            [attr.aria-hidden]="$index !== currentIndex()"
            role="group"
            [attr.aria-roledescription]="'slide'"
            [attr.aria-label]="'Slide ' + ($index + 1) + ' of ' + slides.length">
            @if (slide.src) {
              <img [src]="slide.src" [alt]="slide.alt" class="carousel__image" />
            } @else {
              <div class="carousel__image-placeholder">
                <div class="carousel__placeholder-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>{{ slide.alt || 'Business Image ' + ($index + 1) }}</span>
                </div>
              </div>
            }
          </div>
        }
      </div>

      <!-- Dot Indicators -->
      <div class="carousel__dots" role="tablist" aria-label="Carousel navigation">
        @for (slide of slides; track $index) {
          <button
            class="carousel__dot"
            [class.active]="$index === currentIndex()"
            (click)="goToSlide($index)"
            [attr.aria-label]="'Go to slide ' + ($index + 1)"
            [attr.aria-selected]="$index === currentIndex()"
            role="tab">
          </button>
        }
      </div>
    </div>
  `,
  styles: [`
    .carousel {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 350px;
      border-radius: var(--border-radius);
      overflow: hidden;
    }
    .carousel__slides {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 350px;
    }
    .carousel__slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;
    }
    .carousel__slide.active {
      opacity: 1;
    }
    .carousel__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .carousel__image-placeholder {
      width: 100%;
      height: 100%;
      min-height: 350px;
      background: var(--color-card-bg-transparent);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .carousel__placeholder-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: var(--color-subtext);
      opacity: 0.5;
    }
    .carousel__placeholder-content span {
      font-size: 0.85rem;
    }
    .carousel__dots {
      position: absolute;
      bottom: 1.25rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
    }
    .carousel__dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
    }
    .carousel__dot.active {
      background: var(--color-primary);
      box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
      width: 28px;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      .carousel,
      .carousel__slides,
      .carousel__image-placeholder {
        min-height: 280px;
      }
    }
  `]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: { src: string; alt: string }[] = [
    { src: '/images/carousel_light_1.png', alt: 'Professional Telecalling Services' },
    { src: '/images/carousel_light_2.png', alt: 'Lead Generation Solutions' },
    { src: '/images/carousel_light_3.png', alt: 'Digital Marketing Excellence' },
    { src: '/images/carousel_light_4.png', alt: 'Business Growth Partners' }
  ];

  @Input() autoPlayInterval: number = 4000;

  currentIndex = signal(0);
  private intervalId: any = null;
  private touchStartX = 0;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
  }

  nextSlide(): void {
    this.currentIndex.update(i => (i + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentIndex.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].clientX;
  }

  onTouchEnd(e: TouchEvent): void {
    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  pauseAutoPlay(): void {
    this.stopAutoPlay();
  }

  resumeAutoPlay(): void {
    this.startAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => this.nextSlide(), this.autoPlayInterval);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

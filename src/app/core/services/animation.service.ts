import { Injectable, inject, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Service
 * Provides reusable GSAP animation helpers with ScrollTrigger integration.
 * All animations are subtle and performant.
 */
@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly ngZone = inject(NgZone);

  /**
   * Fade up animation triggered on scroll
   */
  fadeUp(elements: string | Element | Element[], container?: Element): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.fromTo(elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: container || (typeof elements === 'string' ? elements : (Array.isArray(elements) ? elements[0] : elements)),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /**
   * Fade left animation triggered on scroll
   */
  fadeLeft(elements: string | Element | Element[], container?: Element): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.fromTo(elements,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: container || (typeof elements === 'string' ? elements : (Array.isArray(elements) ? elements[0] : elements)),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /**
   * Fade right animation triggered on scroll
   */
  fadeRight(elements: string | Element | Element[], container?: Element): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.fromTo(elements,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: container || (typeof elements === 'string' ? elements : (Array.isArray(elements) ? elements[0] : elements)),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /**
   * Scale in animation triggered on scroll
   */
  scaleIn(elements: string | Element | Element[], container?: Element): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.fromTo(elements,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: container || (typeof elements === 'string' ? elements : (Array.isArray(elements) ? elements[0] : elements)),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /**
   * Animated number counter
   */
  animateCounter(element: Element, target: number, duration: number = 2, suffix: string = ''): void {
    this.ngZone.runOutsideAngular(() => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: target,
        duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          element.textContent = Math.floor(counter.value) + suffix;
        }
      });
    });
  }

  /**
   * Staggered fade up for a group of child elements
   */
  staggerFadeUp(container: string | Element, children: string, delay: number = 0.15): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: delay,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /**
   * Cleanup all ScrollTrigger instances (call on component destroy)
   */
  cleanup(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  /**
   * Refresh ScrollTrigger (call after dynamic content loads)
   */
  refresh(): void {
    ScrollTrigger.refresh();
  }
}

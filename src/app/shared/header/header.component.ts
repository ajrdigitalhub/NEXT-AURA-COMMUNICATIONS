import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../core/models/interfaces';
import { ThemeService } from '../../core/services/theme.service';

/**
 * Header Component
 * Sticky navigation with glassmorphism effect, mobile hamburger menu,
 * and Call Now CTA button.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /** Whether the header has a scrolled background */
  isScrolled = signal(false);

  /** Whether the mobile menu is open */
  isMobileMenuOpen = signal(false);

  /** Theme Service for Light/Dark mode toggle */
  constructor(public themeService: ThemeService) {}

  /** Navigation links */
  navLinks: NavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Contact', route: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

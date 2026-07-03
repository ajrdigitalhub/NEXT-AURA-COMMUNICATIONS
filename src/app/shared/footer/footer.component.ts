import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Footer Component
 * 4-column layout with logo, quick links, services, and contact info.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Contact', route: '/contact' },
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Terms & Conditions', route: '/terms' }
  ];

  services = [
    'Professional Telecalling',
    'Lead Generation',
    'Lead Follow-Up',
    'Digital Marketing',
    'Website Designing'
  ];
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'Privacy Policy | NEXT AURA COMMUNICATIONS',
      description: 'Read the privacy policy of NEXT AURA COMMUNICATIONS. Learn how we collect, use, and protect your personal information.',
      robots: 'index, follow',
      ogUrl: 'https://nextauracommunications.com/privacy-policy',
      canonicalUrl: 'https://nextauracommunications.com/privacy-policy'
    });

    this.seo.setJsonLd(
      this.seo.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy-policy' }
      ])
    );
  }
}

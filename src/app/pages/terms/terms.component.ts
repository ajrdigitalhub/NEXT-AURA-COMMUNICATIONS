import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'Terms & Conditions | NEXT AURA COMMUNICATIONS',
      description: 'Read the terms and conditions for using NEXT AURA COMMUNICATIONS services and website.',
      robots: 'index, follow',
      ogUrl: 'https://nextauracommunications.com/terms',
      canonicalUrl: 'https://nextauracommunications.com/terms'
    });

    this.seo.setJsonLd(
      this.seo.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Terms & Conditions', url: '/terms' }
      ])
    );
  }
}

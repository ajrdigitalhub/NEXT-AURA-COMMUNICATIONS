import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SeoConfig } from '../models/interfaces';

/**
 * SEO Service
 * Handles meta tags, Open Graph, Twitter Cards, canonical URLs,
 * and JSON-LD structured data injection for every page.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  /** Base URL for canonical and OG URLs — update before deployment */
  private readonly baseUrl = 'https://nextauracommunications.com';

  /**
   * Set all SEO meta tags for a page
   */
  setPageSeo(config: SeoConfig): void {
    // Title
    this.title.setTitle(config.title);

    // Standard meta
    this.updateMeta('description', config.description);
    if (config.keywords) {
      this.updateMeta('keywords', config.keywords);
    }
    this.updateMeta('robots', config.robots || 'index, follow');

    // Open Graph
    this.updateMeta('og:title', config.ogTitle || config.title, true);
    this.updateMeta('og:description', config.ogDescription || config.description, true);
    this.updateMeta('og:type', 'website', true);
    this.updateMeta('og:url', config.ogUrl || this.baseUrl, true);
    this.updateMeta('og:image', config.ogImage || `${this.baseUrl}/assets/images/og-image.jpg`, true);
    this.updateMeta('og:site_name', 'NEXT AURA COMMUNICATIONS', true);

    // Twitter Card
    this.updateMeta('twitter:card', config.twitterCard || 'summary_large_image');
    this.updateMeta('twitter:title', config.ogTitle || config.title);
    this.updateMeta('twitter:description', config.ogDescription || config.description);
    this.updateMeta('twitter:image', config.ogImage || `${this.baseUrl}/assets/images/og-image.jpg`);

    // Canonical URL
    this.setCanonicalUrl(config.canonicalUrl || config.ogUrl || this.baseUrl);
  }

  /**
   * Inject JSON-LD structured data into the page <head>
   */
  setJsonLd(schema: object | object[]): void {
    // Remove existing JSON-LD scripts
    this.removeJsonLd();

    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.forEach(s => {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(s);
      script.setAttribute('data-jsonld', 'true');
      this.document.head.appendChild(script);
    });
  }

  /**
   * Generate Organization schema
   */
  getOrganizationSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NEXT AURA COMMUNICATIONS',
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/images/logo.png`,
      description: 'Professional telecalling, lead generation, digital marketing, and website development services.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://www.instagram.com/nextauracommunications',
        'https://www.facebook.com/nextauracommunications',
        'https://www.linkedin.com/company/nextauracommunications'
      ]
    };
  }

  /**
   * Generate LocalBusiness schema
   */
  getLocalBusinessSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'NEXT AURA COMMUNICATIONS',
      url: this.baseUrl,
      telephone: '+91-XXXXXXXXXX',
      email: 'info@nextauracommunications.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    };
  }

  /**
   * Generate Website schema
   */
  getWebsiteSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NEXT AURA COMMUNICATIONS',
      url: this.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  /**
   * Generate BreadcrumbList schema
   */
  getBreadcrumbSchema(items: { name: string; url: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${this.baseUrl}${item.url}`
      }))
    };
  }

  /**
   * Generate Service schema
   */
  getServiceSchema(name: string, description: string): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      provider: {
        '@type': 'Organization',
        name: 'NEXT AURA COMMUNICATIONS',
        url: this.baseUrl
      },
      areaServed: {
        '@type': 'Country',
        name: 'India'
      }
    };
  }

  /** Helper: update or add a meta tag */
  private updateMeta(name: string, content: string, isProperty = false): void {
    const attr = isProperty ? 'property' : 'name';
    const existing = this.meta.getTag(`${attr}="${name}"`);
    if (existing) {
      this.meta.updateTag({ [attr]: name, content });
    } else {
      this.meta.addTag({ [attr]: name, content });
    }
  }

  /** Helper: set canonical URL */
  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Helper: remove existing JSON-LD scripts */
  private removeJsonLd(): void {
    const scripts = this.document.querySelectorAll('script[data-jsonld]');
    scripts.forEach(s => s.remove());
  }
}

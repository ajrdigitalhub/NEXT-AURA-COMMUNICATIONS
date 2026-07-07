import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { AnimationService } from '../../core/services/animation.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { StatsCounterComponent } from '../../shared/stats-counter/stats-counter.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';
import { ServiceItem, StatItem, Testimonial, ProcessStep } from '../../core/models/interfaces';

/**
 * Home Page Component
 * Landing page with hero, stats, services, why choose us, process, testimonials, and CTA.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionHeadingComponent,
    ServiceCardComponent,
    StatsCounterComponent,
    CarouselComponent,
    TestimonialCardComponent,
    CtaSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly animation = inject(AnimationService);

  /** Services data */
  services: ServiceItem[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      title: 'Professional Telecalling',
      description: 'Expert telecallers trained to represent your brand, engage customers, and convert leads into loyal clients.',
      slug: 'telecalling'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      title: 'Lead Generation',
      description: 'Strategic lead generation campaigns that identify and capture high-quality prospects for your business.',
      slug: 'lead-generation'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      title: 'Lead Follow-Up',
      description: 'Systematic follow-up processes to nurture leads through the sales funnel and maximize conversions.',
      slug: 'lead-followup'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, and paid advertising.',
      slug: 'digital-marketing'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
      title: 'Website Designing',
      description: 'Modern, responsive websites designed to impress visitors and convert them into customers.',
      slug: 'website-designing'
    }
  ];

  /** Stats data */
  stats: StatItem[] = [
    { value: 1000, suffix: '+', label: 'Leads Generated' },
    { value: 95, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: 'x7', label: 'Support' },
    { value: 5, suffix: '+', label: 'Services' }
  ];

  features = [
    { icon: '/images/feat_team.png', title: 'Professional Team', desc: 'Skilled and dedicated professionals committed to your success.' },
    { icon: '/images/feat_exp.png', title: 'Experienced Callers', desc: 'Trained telecallers with proven track records.' },
    { icon: '/images/feat_qa.png', title: 'Quality Assurance', desc: 'Rigorous quality checks on every call and campaign.' },
    { icon: '/images/feat_rep.png', title: 'Timely Reports', desc: 'Transparent, detailed reports delivered on schedule.' },
    { icon: '/images/feat_price.png', title: 'Affordable Pricing', desc: 'Competitive rates that deliver maximum ROI.' },
    { icon: '/images/feat_conv.png', title: 'Higher Conversion', desc: 'Data-driven strategies that boost conversion rates.' },
    { icon: '/images/feat_supp.png', title: 'Dedicated Support', desc: 'Round-the-clock support for all your needs.' }
  ];

  /** Process steps */
  steps: ProcessStep[] = [
    { number: 1, title: 'Understand Business', description: 'We analyze your business goals, target audience, and requirements.' },
    { number: 2, title: 'Create Strategy', description: 'Develop a customized calling and marketing strategy.' },
    { number: 3, title: 'Start Calling', description: 'Our trained team begins executing the strategy.' },
    { number: 4, title: 'Weekly Reports', description: 'Receive detailed progress reports with insights.' },
    { number: 5, title: 'Business Growth', description: 'Watch your leads and revenue grow consistently.' }
  ];

  /** Testimonials */
  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      review: 'NEXT AURA COMMUNICATIONS transformed our lead generation process. Their telecalling team is professional, efficient, and delivers consistent results. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'GreenLeaf Enterprises',
      review: 'Outstanding service quality! The follow-up process is systematic and has significantly improved our conversion rate. A reliable business partner.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Digital Sphere Inc.',
      review: 'Their digital marketing expertise combined with telecalling services has given us a complete business growth solution. Great team, great results!',
      rating: 5
    }
  ];

  ngOnInit(): void {
    // Set page SEO
    this.seo.setPageSeo({
      title: 'Professional Telecalling Services | NEXT AURA COMMUNICATIONS',
      description: 'Grow your business with professional telecalling services, lead generation, follow-up, digital marketing and website designing by NEXT AURA COMMUNICATIONS.',
      keywords: 'telecalling services, lead generation, lead follow up, business telecalling, digital marketing, website designing, customer support, sales calling, business growth, India telecalling',
      ogUrl: 'https://nextauracommunications.com/',
      canonicalUrl: 'https://nextauracommunications.com/'
    });

    // Set JSON-LD schemas
    this.seo.setJsonLd([
      this.seo.getOrganizationSchema(),
      this.seo.getWebsiteSchema(),
      ...this.services.map(s => this.seo.getServiceSchema(s.title, s.description))
    ]);
  }

  ngAfterViewInit(): void {
    // Hero animations
    this.animation.fadeLeft('.hero__content');
    this.animation.fadeRight('.hero__carousel');

    // Stats animation
    this.animation.fadeUp('.stats-section');

    // Services cards
    this.animation.staggerFadeUp('.services-section', '.service-card-wrapper');

    // Features
    this.animation.staggerFadeUp('.features-section', '.feature-card');

    // Process steps
    this.animation.staggerFadeUp('.process-section', '.process-step');

    // Testimonials
    this.animation.staggerFadeUp('.testimonials-section', '.testimonial-wrapper');
  }

  ngOnDestroy(): void {
    this.animation.cleanup();
  }
}

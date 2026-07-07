import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { AnimationService } from '../../core/services/animation.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';
import { TimelineEvent, ValueCard } from '../../core/models/interfaces';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, CtaSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly animation = inject(AnimationService);

  values: ValueCard[] = [
    { icon: '/images/value_integ.png', title: 'Integrity', description: 'We operate with complete transparency and honesty in all our dealings.' },
    { icon: '/images/value_excel.png', title: 'Excellence', description: 'We strive for excellence in every call, every campaign, and every interaction.' },
    { icon: '/images/value_innov.png', title: 'Innovation', description: 'We continuously adapt and innovate our strategies to stay ahead of the curve.' }
  ];

  timeline: TimelineEvent[] = [
    { year: '2020', title: 'Founded', description: 'NEXT AURA COMMUNICATIONS was established with a vision to transform business communication.' },
    { year: '2021', title: 'First 100 Clients', description: 'Reached our first milestone of serving 100 business clients across India.' },
    { year: '2022', title: 'Digital Expansion', description: 'Expanded our services to include digital marketing and website development.' },
    { year: '2023', title: '1000+ Leads', description: 'Crossed the milestone of generating over 1000 qualified leads for our clients.' },
    { year: '2024', title: 'Growing Strong', description: 'Continuing to grow with new services and a larger, more experienced team.' }
  ];

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'About NEXT AURA COMMUNICATIONS',
      description: 'Learn about NEXT AURA COMMUNICATIONS, our mission, experienced team, telecalling expertise and commitment to helping businesses grow.',
      keywords: 'about next aura communications, telecalling company, business communication, lead generation company',
      ogUrl: 'https://nextauracommunications.com/about',
      canonicalUrl: 'https://nextauracommunications.com/about'
    });

    this.seo.setJsonLd([
      this.seo.getOrganizationSchema(),
      this.seo.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' }
      ])
    ]);
  }

  ngAfterViewInit(): void {
    this.animation.fadeUp('.about-story');
    this.animation.fadeLeft('.mission-card');
    this.animation.fadeRight('.vision-card');
    this.animation.staggerFadeUp('.values-section', '.value-card');
    this.animation.staggerFadeUp('.timeline-section', '.timeline-item');
  }

  ngOnDestroy(): void {
    this.animation.cleanup();
  }
}

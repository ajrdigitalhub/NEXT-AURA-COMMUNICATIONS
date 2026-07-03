import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { AnimationService } from '../../core/services/animation.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';
import { FaqItem } from '../../core/models/interfaces';

interface DetailedService {
  slug: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  idealCustomers: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, CtaSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly animation = inject(AnimationService);

  services: DetailedService[] = [
    {
      slug: 'telecalling',
      icon: '/images/srv_tele.png',
      title: 'Professional Telecalling',
      description: 'Our trained telecallers represent your brand with professionalism and expertise. We handle outbound and inbound calls, customer engagement, appointment scheduling, and sales conversions with a focus on quality and results.',
      benefits: [
        'Trained and experienced telecallers',
        'Customized scripts for your business',
        'Real-time call monitoring and quality assurance',
        'Detailed call reports and analytics',
        'Flexible calling schedules',
        'Multi-language support'
      ],
      idealCustomers: ['B2B companies', 'Real estate firms', 'Insurance agencies', 'Educational institutions', 'Healthcare providers', 'E-commerce businesses']
    },
    {
      slug: 'lead-generation',
      icon: '/images/srv_lead_gen.png',
      title: 'Lead Generation',
      description: 'We identify, capture, and qualify high-quality leads for your business through strategic campaigns. Our data-driven approach ensures you get prospects who are genuinely interested in your products or services.',
      benefits: [
        'Targeted lead sourcing',
        'Data verification and validation',
        'Lead scoring and qualification',
        'CRM integration support',
        'Regular lead reports',
        'Higher quality prospects'
      ],
      idealCustomers: ['Startups', 'SaaS companies', 'Financial services', 'Real estate developers', 'IT companies', 'Consulting firms']
    },
    {
      slug: 'lead-followup',
      icon: '/images/srv_followup.png',
      title: 'Lead Follow-Up',
      description: 'Maximize your conversion rate with our systematic follow-up process. We nurture your leads through the sales funnel with timely, personalized communication that keeps your brand top of mind.',
      benefits: [
        'Systematic follow-up schedules',
        'Personalized communication',
        'Multi-channel follow-up (call, email, SMS)',
        'Lead nurturing sequences',
        'Conversion tracking',
        'Re-engagement campaigns'
      ],
      idealCustomers: ['Any business with existing leads', 'Companies with long sales cycles', 'Subscription-based services', 'High-ticket product sellers']
    },
    {
      slug: 'digital-marketing',
      icon: '/images/srv_digital.png',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence. From SEO and social media management to paid advertising and content marketing, we cover all aspects of digital growth.',
      benefits: [
        'Search Engine Optimization (SEO)',
        'Social media marketing',
        'Google Ads & Facebook Ads',
        'Content creation and marketing',
        'Email marketing campaigns',
        'Analytics and performance tracking'
      ],
      idealCustomers: ['Small and medium businesses', 'Local businesses', 'E-commerce stores', 'Professional services', 'Restaurants and hospitality']
    },
    {
      slug: 'website-designing',
      icon: '/images/srv_web.png',
      title: 'Website Designing',
      description: 'Modern, responsive, and conversion-optimized websites that make a lasting impression. We design and develop websites that not only look stunning but also drive business results.',
      benefits: [
        'Responsive and mobile-friendly design',
        'SEO-optimized structure',
        'Fast loading speeds',
        'Professional UI/UX design',
        'Content management system',
        'Ongoing maintenance and support'
      ],
      idealCustomers: ['New businesses', 'Businesses needing a website refresh', 'Professional services', 'Portfolio-based businesses', 'Local service providers']
    }
  ];

  faqs: FaqItem[] = [
    { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including real estate, insurance, education, healthcare, IT, e-commerce, financial services, and more. Our telecalling and marketing strategies are customizable to fit any business vertical.', isOpen: false },
    { question: 'How do you ensure call quality?', answer: 'We implement rigorous quality assurance measures including call monitoring, regular training sessions, scripted guidelines with flexibility, and performance reviews. Every call is tracked and analyzed for continuous improvement.', isOpen: false },
    { question: 'What is the minimum contract period?', answer: 'We offer flexible engagement models. While we recommend a minimum of 3 months for optimal results, we also offer monthly plans for businesses that want to start small and scale up.', isOpen: false },
    { question: 'Do you provide reports?', answer: 'Yes, absolutely! We provide comprehensive weekly and monthly reports that include call logs, lead status updates, conversion metrics, and actionable insights to help you track ROI.', isOpen: false },
    { question: 'Can you integrate with our existing CRM?', answer: 'Yes, we can work with most popular CRM platforms. Our team will coordinate with your IT team to ensure seamless integration and data flow.', isOpen: false },
    { question: 'How quickly can you start?', answer: 'Once we understand your requirements, we can typically set up and begin operations within 5-7 business days. This includes team training, script development, and system setup.', isOpen: false }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'Professional Business Services | NEXT AURA COMMUNICATIONS',
      description: 'Explore our telecalling, lead generation, follow-up, digital marketing and website development services at NEXT AURA COMMUNICATIONS.',
      keywords: 'telecalling services, lead generation services, digital marketing services, website designing, business growth services',
      ogUrl: 'https://nextauracommunications.com/services',
      canonicalUrl: 'https://nextauracommunications.com/services'
    });

    this.seo.setJsonLd([
      ...this.services.map(s => this.seo.getServiceSchema(s.title, s.description)),
      this.seo.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
      ])
    ]);
  }

  ngAfterViewInit(): void {
    this.animation.staggerFadeUp('.services-detail-section', '.service-detail-card');
    this.animation.fadeUp('.faq-section');
  }

  ngOnDestroy(): void {
    this.animation.cleanup();
  }
}

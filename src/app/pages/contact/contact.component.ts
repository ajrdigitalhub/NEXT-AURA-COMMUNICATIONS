import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { AnimationService } from '../../core/services/animation.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ContactFormData } from '../../core/models/interfaces';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly animation = inject(AnimationService);

  /** Form data model */
  formData: ContactFormData = {
    name: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: '',
    message: ''
  };

  /** Form submission state */
  isSubmitting = signal(false);
  isSubmitted = signal(false);

  /** Service options for dropdown */
  serviceOptions = [
    'Professional Telecalling',
    'Lead Generation',
    'Lead Follow-Up',
    'Digital Marketing',
    'Website Designing',
    'Multiple Services',
    'Other'
  ];

  /** Contact information */
  contactInfo = [
    {
      icon: 'phone',
      title: 'Call Us',
      value: '+91 99510 28769',
      link: 'tel:+919951028769',
      color: '#8B5CF6'
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp',
      value: '+91 81428 21576',
      link: 'https://wa.me/918142821576',
      color: '#25D366'
    },
    {
      icon: 'email',
      title: 'Email Us',
      value: 'Nextaura.communications@gmail.com',
      link: 'mailto:Nextaura.communications@gmail.com',
      color: '#A855F7'
    }
  ];

  /**
   * Handle form submission (frontend only — prepared for backend integration)
   */
  onSubmit(): void {
    this.isSubmitting.set(true);

    // TODO: Replace with actual API call
    // Example: this.http.post('/api/contact', this.formData).subscribe(...)
    console.log('Contact Form Data:', this.formData);

    // Simulate submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        this.isSubmitted.set(false);
        this.formData = {
          name: '',
          phone: '',
          email: '',
          businessName: '',
          serviceRequired: '',
          message: ''
        };
      }, 3000);
    }, 1500);
  }

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'Contact NEXT AURA COMMUNICATIONS',
      description: 'Contact NEXT AURA COMMUNICATIONS for telecalling, lead generation, digital marketing and website development services.',
      keywords: 'contact next aura communications, telecalling contact, business inquiry, get in touch',
      ogUrl: 'https://nextauracommunications.com/contact',
      canonicalUrl: 'https://nextauracommunications.com/contact'
    });

    this.seo.setJsonLd([
      this.seo.getLocalBusinessSchema(),
      this.seo.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
      ])
    ]);
  }

  ngAfterViewInit(): void {
    this.animation.fadeLeft('.contact-form-section');
    this.animation.fadeRight('.contact-info-section');
    this.animation.fadeUp('.contact-map');
  }

  ngOnDestroy(): void {
    this.animation.cleanup();
  }
}

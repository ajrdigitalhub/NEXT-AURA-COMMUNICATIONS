import { Routes } from '@angular/router';

/**
 * Application routes — all lazy loaded for code splitting.
 * Each page is a standalone component loaded on demand.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Professional Telecalling Services | NEXT AURA COMMUNICATIONS'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About NEXT AURA COMMUNICATIONS'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Professional Business Services | NEXT AURA COMMUNICATIONS'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact NEXT AURA COMMUNICATIONS'
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Privacy Policy | NEXT AURA COMMUNICATIONS'
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms & Conditions | NEXT AURA COMMUNICATIONS'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Page Not Found | NEXT AURA COMMUNICATIONS'
  }
];

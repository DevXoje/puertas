import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { FooterMainComponent } from './components/footer/footer-main/footer-main.component';
import { FooterSiteInfoComponent } from './components/footer/footer-site-info/footer-site-info.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutBreadcrumbsComponent } from './layout/layout-breadcrumbs/layout-breadcrumbs.component';
import { BreadcrumbsComponent } from './components/breadcumbs/breadcrumbs.component';
import { OurSocialMediaComponent } from './components/our-social-media/our-social-media.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { WhatsappFixedComponent } from './components/whatsapp-fixed/whatsapp-fixed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { HeroComponent } from '@shared/components/hero/hero.component';
import { MapsComponent } from './components/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
const declarables = [
  FooterComponent,
  NavbarComponent,
  LayoutComponent,
  LayoutBreadcrumbsComponent,
  OurSocialMediaComponent,
  ContactFormComponent,
  SectionComponent,
  HeroComponent,
  MapsComponent,
];
@NgModule({
  declarations: [
    ...declarables,
    FooterSocialComponent,
    FooterSiteInfoComponent,
    FooterMainComponent,
    BreadcrumbsComponent,
    WhatsappFixedComponent,
    SectionComponent,
    MapsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    RouterLink,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [declarables],
})
export class SharedModule {}

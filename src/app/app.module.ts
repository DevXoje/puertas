import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MaterialModule } from './material.module';
import { EmpresaComponent } from './pages/our-info/our-info/empresa.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeroComponent } from './pages/our-info/components/hero/hero.component';
import { OurInfoComponent } from './pages/our-info/components/our-info/our-info.component';
import { OurProductsComponent } from './pages/our-info/components/our-products/our-products.component';
import { OurSkillsComponent } from './pages/our-info/components/our-skills/our-skills.component';
import { OurContactComponent } from './pages/our-info/components/our-contact/our-contact.component';
import { OurSocialMediaComponent } from './our-social-media/our-social-media.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { OurInfoModule } from './pages/our-info/our-info.module';
import { ContactModule } from './pages/contact/contact.module';
import { CatalogueModule } from './pages/catalogue/catalogue.module';
import { ErrorComponent } from './components/error.component';
import { PrivacyPolicyComponent } from './components/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    EmpresaComponent,
    BreadcumbsComponent,
    HeroComponent,
    OurInfoComponent,
    OurProductsComponent,
    OurSkillsComponent,
    OurContactComponent,
    OurSocialMediaComponent,
    ErrorComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    HomeModule,
    OurInfoModule,
    ContactModule,
    CatalogueModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

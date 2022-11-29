import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { FooterSiteInfoComponent } from './components/footer-site-info/footer-site-info.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { HeroParallaxComponent } from './components/hero-parallax/hero-parallax.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WhoIAmDescriptionComponent } from './components/who-iam-description/who-iam-description.component';
import { WhoIAmServicesComponent } from './components/who-iam-services/who-iam-services.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { WhoIAmComponent } from './containers/who-iam/who-iam.component';
import { MaterialModule } from './material.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeroComponent } from './hero/hero.component';
import { OurInfoComponent } from './our-info/our-info.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { OurContactComponent } from './our-contact/our-contact.component';
import { OurSocialMediaComponent } from './our-social-media/our-social-media.component';
import { ContactComponent } from './contact/contact.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import { DoubtsFormComponent } from './doubts-form/doubts-form.component';
import { CallToContactComponent } from './call-to-contact/call-to-contact.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { OurInfoModule } from './pages/our-info/our-info.module';
import { ContactModule } from './pages/contact/contact.module';
import { CatalogueModule } from './pages/catalogue/catalogue.module';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ContactFormComponent,
		HomeComponent,
		LayoutComponent,
		FooterComponent,
		HeroParallaxComponent,
		WhoIAmComponent,
		ReviewsComponent,
		CallToActionComponent,
		WhoIAmDescriptionComponent,
		WhoIAmServicesComponent,
		FooterSocialComponent,
		FooterSiteInfoComponent,
		FooterMainComponent,
		EmpresaComponent,
		BreadcumbsComponent,
		HeroComponent,
		OurInfoComponent,
		OurProductsComponent,
		OurSkillsComponent,
		OurContactComponent,
		OurSocialMediaComponent,
		ContactComponent,
		WhereWeAreComponent,
		DoubtsFormComponent,
		CallToContactComponent,
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

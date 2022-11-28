import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './containers/home/home.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeroParallaxComponent } from './components/hero-parallax/hero-parallax.component';
import { WhoIAmComponent } from './containers/who-iam/who-iam.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { MaterialModule } from './material.module';
import { WhoIAmDescriptionComponent } from './components/who-iam-description/who-iam-description.component';
import { WhoIAmServicesComponent } from './components/who-iam-services/who-iam-services.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { FooterSiteInfoComponent } from './components/footer-site-info/footer-site-info.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';

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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LayoutModule,
		MaterialModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

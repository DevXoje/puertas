import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroParallaxComponent } from './components/hero-parallax/hero-parallax.component';
import { WhoIAmDescriptionComponent } from './components/who-iam/who-iam-description/who-iam-description.component';
import { WhoIAmServicesComponent } from './components/who-iam/who-iam-services/who-iam-services.component';
import { WhoIAmComponent } from './components/who-iam/who-iam.component';
import { MaterialModule } from '../../material.module';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroParallaxComponent,
    WhoIAmComponent,
    WhoIAmDescriptionComponent,
    WhoIAmServicesComponent,
    ReviewsComponent,
    CallToActionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgOptimizedImage,
    SharedModule,
  ],
})
export class HomeModule {}

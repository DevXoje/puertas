import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { EmpresaComponent } from './pages/our-info/our-info/empresa.component';
import { OurInfoComponent } from './pages/our-info/components/our-info/our-info.component';
import { OurProductsComponent } from './pages/our-info/components/our-products/our-products.component';
import { OurSkillsComponent } from './pages/our-info/components/our-skills/our-skills.component';
import { OurContactComponent } from './pages/our-info/components/our-contact/our-contact.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { OurInfoModule } from './pages/our-info/our-info.module';
import { ContactModule } from './pages/contact/contact.module';
import { CatalogueModule } from './pages/catalogue/catalogue.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    OurInfoComponent,
    OurProductsComponent,
    OurSkillsComponent,
    OurContactComponent,
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
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

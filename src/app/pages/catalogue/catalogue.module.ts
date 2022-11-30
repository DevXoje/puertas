import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MaterialModule } from '../../material.module';
import { CatalogueSectionComponent } from './components/catalogue-section/catalogue-section.component';
import { GaleryComponent } from './components/galery/galery.component';
import { GaleryCardsComponent } from './components/galery-cards/galery-cards.component';
import { PuertasEntradaExteriorComponent } from './components/puertas-entrada-exterior/puertas-entrada-exterior.component';
import { PuertasInteriorComponent } from './components/puertas-interior/puertas-interior.component';
import { ArmariosVestidoresComponent } from './components/armarios-vestidores/armarios-vestidores.component';
import { TrabajadosEspecialesComponent } from './components/trabajados-especiales/trabajados-especiales.component';
import { CallToCallComponent } from './components/call-to-call/call-to-call.component';
import { CallToSocialMediaComponent } from './components/call-to-social-media/call-to-social-media.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueSectionComponent,
    GaleryComponent,
    GaleryCardsComponent,
    PuertasEntradaExteriorComponent,
    PuertasInteriorComponent,
    ArmariosVestidoresComponent,
    TrabajadosEspecialesComponent,
    CallToCallComponent,
    CallToSocialMediaComponent,
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ],
})
export class CatalogueModule {}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MaterialModule } from '../../material.module';
import { CatalogueSectionComponent } from './components/catalogue-section/catalogue-section.component';
import { GalleryComponent } from './components/galery/gallery.component';
import { GaleryCardsComponent } from './components/galery-cards/galery-cards.component';
import { PuertasEntradaExteriorComponent } from './containers/puertas-entrada-exterior/puertas-entrada-exterior.component';
import { PuertasInteriorComponent } from './containers/puertas-interior/puertas-interior.component';
import { ArmariosVestidoresComponent } from './containers/armarios-vestidores/armarios-vestidores.component';
import { TrabajadosEspecialesComponent } from './containers/trabajados-especiales/trabajados-especiales.component';
import { CallToCallComponent } from './components/call-to-call/call-to-call.component';
import { CallToSocialMediaComponent } from './components/call-to-social-media/call-to-social-media.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        CatalogueComponent,
        CatalogueSectionComponent,
        GalleryComponent,
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
        NgOptimizedImage,
        SharedModule,
    ],
})
export class CatalogueModule {}

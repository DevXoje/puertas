import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [CatalogueComponent],
  imports: [CommonModule, CatalogueRoutingModule, MaterialModule],
})
export class CatalogueModule {}

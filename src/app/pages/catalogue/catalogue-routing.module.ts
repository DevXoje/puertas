import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATALOGUE_ROUTES } from './catalogue.routes';

@NgModule({
  imports: [CATALOGUE_ROUTES],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}

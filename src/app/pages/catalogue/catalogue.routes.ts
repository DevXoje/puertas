import { Route, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';

const catalogueRoutes: Route[] = [
  {
    path: '',
    component: CatalogueComponent,
  },
];

export const CATALOGUE_ROUTES = RouterModule.forChild(catalogueRoutes);

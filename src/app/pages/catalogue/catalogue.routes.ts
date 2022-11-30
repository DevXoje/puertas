import { Route, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PuertasEntradaExteriorComponent } from './components/puertas-entrada-exterior/puertas-entrada-exterior.component';
import { PuertasInteriorComponent } from './components/puertas-interior/puertas-interior.component';
import { TrabajadosEspecialesComponent } from './components/trabajados-especiales/trabajados-especiales.component';
import { ArmariosVestidoresComponent } from './components/armarios-vestidores/armarios-vestidores.component';

const catalogueRoutes: Route[] = [
  {
    path: '',
    component: CatalogueComponent,
  },
  {
    path: 'entrada',
    component: PuertasEntradaExteriorComponent,
  },
  {
    path: 'interior',
    component: PuertasInteriorComponent,
  },
  {
    path: 'armarios',
    component: ArmariosVestidoresComponent,
  },
  {
    path: 'especiales',
    component: TrabajadosEspecialesComponent,
  },
];

export const CATALOGUE_ROUTES = RouterModule.forChild(catalogueRoutes);

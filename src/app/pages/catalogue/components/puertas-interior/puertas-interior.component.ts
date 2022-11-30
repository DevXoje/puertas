import { Component } from '@angular/core';
import { Catalogue_Section } from '@core/model/catalogue_section';

@Component({
  selector: 'app-puertas-interior',
  templateUrl: './puertas-interior.component.html',
  styleUrls: ['./puertas-interior.component.scss'],
})
export class PuertasInteriorComponent {
  rusticas_exterior: Catalogue_Section = {
    header: {
      title: 'Puertas Rústicas de Calle',
      content: [
        'En esta sección les mostramos las Puertas dirigidas a entradas de chalets, casas rurales, fincas, casas de campo y edificios antiguos.',
        'Así mismo, son puertas de exterior fabricadas en maderas macizas y las tenemos en cualquier medida.',
        'Somos una fábrica de puertas que también distribuimos y realizamos la instalación. Todo en conjunto en el mismo servicio para tu mayor facilidad.',
        'Tenemos unos precios muy competitivos y económicos. Para más información llámenos y le ofreceremos el mejor servicio a su medida.',
      ],
    },
    images: [{ path: 'https://via.placeholder.com/150', alt: 'algo' }],
  };
  rusticas_interior: Catalogue_Section = {
    header: {
      title: 'Puertas de Entrada rústicas de madera',
    },
    images: [{ path: 'https://via.placeholder.com/150', alt: 'algo' }],
  };

  lacadas: Catalogue_Section = {
    header: {
      title: '',
    },
    images: [{ path: 'https://via.placeholder.com/150', alt: 'algo' }],
  };
}

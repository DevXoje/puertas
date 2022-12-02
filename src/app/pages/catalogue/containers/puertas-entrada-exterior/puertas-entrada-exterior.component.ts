import { Component } from '@angular/core';
import { Catalogue_Section } from 'src/app/core/models/catalogue_section';

@Component({
  selector: 'app-puertas-entrada-exterior',
  template: `<app-catalogue-section
    [galleries]="[
      rusticas_calle,
      rusticas_interior,
      lacadas
    ]"></app-catalogue-section>`,
})
export class PuertasEntradaExteriorComponent {
  rusticas_calle: Catalogue_Section = {
    header: {
      title: 'Puertas Rústicas de Calle',
      content: [
        'En esta sección les mostramos las Puertas dirigidas a entradas de chalets, casas rurales, fincas, casas de campo y edificios antiguos.',
        'Así mismo, son puertas de exterior fabricadas en maderas macizas y las tenemos en cualquier medida.',
        'Somos una fábrica de puertas que también distribuimos y realizamos la instalación. Todo en conjunto en el mismo servicio para tu mayor facilidad.',
        'Tenemos unos precios muy competitivos y económicos. Para más información llámenos y le ofreceremos el mejor servicio a su medida.',
      ],
    },
    images: [
      {
        path: 'https://via.placeholder.com/150',
        alt: 'algo',
        width: 150,
        height: 150,
      },
    ],
  };
  rusticas_interior: Catalogue_Section = {
    header: {
      title: 'Puertas de Entrada rústicas de madera',
    },
    images: [
      {
        path: 'https://via.placeholder.com/150',
        alt: 'algo',
        width: 150,
        height: 150,
      },
    ],
  };

  lacadas: Catalogue_Section = {
    header: {
      title: 'Puertas de Entrada Lacadas Blancas',
    },
    images: [
      {
        path: 'https://via.placeholder.com/150',
        alt: 'algo',
        width: 150,
        height: 150,
      },
    ],
  };
}

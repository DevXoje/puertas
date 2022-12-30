import { Component } from '@angular/core';
import { Catalogue_Section } from 'src/app/core/models/catalogue_section';

@Component({
    selector: 'app-puertas-interior',
    template: `
        <app-catalogue-section
            [galleries]="[internas_nogal, lacado_blanco]"
            [withCallToAction]="false"></app-catalogue-section>
    `,
})
export class PuertasInteriorComponent {
    internas_nogal: Catalogue_Section = {
        header: {
            title: 'Puertas Internas en Nogal',
            paragraphs: [
                'La firmeza y elegancia de las puertas de Interior clásicas hace que su uso se recomiende principalmente en casas grandes, decoradas con un estilo tradicional, en las que la instalación de estas puertas consigue un ambiente noble y distinguido.',
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
        footer: [
            `A su vez, las <strong>puertas modernas</strong> son conocidas por su diseño minimalista por lo que su uso se recomienda en estancias actuales, de líneas rectas. Son puertas para ambientes en los que la sensación de amplitud imprescindible.`,
        ],
    };
    lacado_blanco: Catalogue_Section = {
        header: {
            title: 'Puertas Internas en Lacado Blanco',
            paragraphs: [
                'Las puertas de casa u oficina lacadas, actualmente son muy demandadas y destacan, no solo por su sencillez y elegancia, sino también por la sensación de limpieza y suavidad que ofrece la laca.',
                'Asímismo, estan recomendadas para ambientes modernos en los que la luminosidad es esencial. Encajan perfectamente con tonos fuertes pero a la vez favorecen los colores de pared suaves.',
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
}

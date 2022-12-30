import { Component } from '@angular/core';
import { Catalogue_Section } from '@core/models/catalogue_section';

@Component({
    selector: 'app-armarios-vestidores',
    template: `<app-catalogue-section
        [galleries]="[pino, nogal]"
        [withCallToAction]="false"></app-catalogue-section>`,
})
export class ArmariosVestidoresComponent {
    pino: Catalogue_Section = {
        header: {
            title: 'Armarios de Pino',
            paragraphs: [
                'Tienes a tu disposición gran variedad de Armários y vestidores que te ofrecemos con diferentes materiales y acabados.',
                'Los armarios y vestidores de Pino ofrecen una gran resistencia y durabilidad. Con los diferentes tratamientos naturales se les puede caracterizar con un efecto rústico y favorecer a su resistencia.',
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
            'Incluso ofrecemos una amplia gama de productos para el almacenaje de ropa con el que le sacarás el máximo partido a tu armario. No nos olvidemos de bisagras, rieles y barras, para mantener tu armario siempre en perfectas condiciones.',
        ],
    };
    nogal: Catalogue_Section = {
        header: {
            title: 'Armarios de Nogal',
            paragraphs: [
                'Te mostramos los armarios con puertas batientes de gran sencillez tanto en madera maciza, rústicos e incluso en otros materiales.',
                'También, te ofrecemos los armarios de puertas correderas para una mayor comodidad incluso con puertas de espejo para comprobar cómo te queda la ropa.',
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
            'Además, podrás crear tu propio armario personalizado ropero o vestidor eligiendo la estructura y las puertas, o completa el que adquieras con estantes y cajoneras adicionales para una mejor organización.',
            'Tú decides cómo organizar tu ropa.',
            'Igualmente, te encantarán nuestros zapateros con modelos muy decorativos que te sorprenderán.',
        ],
    };

    lacados: Catalogue_Section = {
        header: {
            title: 'Armarios Lacados Blancos',
            paragraphs: ['Armarios en corredera'],
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
            'Además, podrás crear tu propio armario personalizado ropero o vestidor eligiendo la estructura y las puertas, o completa el que adquieras con estantes y cajoneras adicionales para una mejor organización.',
            'Tú decides cómo organizar tu ropa.',
            'Igualmente, te encantarán nuestros zapateros con modelos muy decorativos que te sorprenderán.',
        ],
    };
}

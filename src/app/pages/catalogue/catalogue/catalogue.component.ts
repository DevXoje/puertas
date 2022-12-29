import { Component } from '@angular/core';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent {
    sections = [
        {
            title: 'Puertas de Entrada',
            content: {
                main: 'Todas nuestras puertas exteriores ordenadas por materiales de fabricación y acabados',
                footer: 'Te facilitamos nuestro catálogo, no esperes más.',
            },
            bg_img: 'https://via.placeholder.com/150',
            path: '',
        },
        {
            title: 'Puertas Internas',
            content: {
                main: 'Puertas de interior fabricadas exclusivamente para ti y con el mejor servicio de instalación a tu medida',
                footer: 'Ya disponible en nuestro catálogo de puertas interiores.',
            },
            bg_img: 'https://via.placeholder.com/150',
            path: '',
        },
        {
            title: 'Armarios y Vestidores',
            content: {
                main: 'Nuestros Armarios y Vestidores en oferta',
                footer: 'Te mostramos nuestros armarios empotrados tanto interiores como exteriores y los vestidores más originales en madera.',
            },
            bg_img: 'https://via.placeholder.com/150',
            path: '',
        },
        {
            title: 'Trabajos Especiales',
            content: {
                main: 'Tarimas flotantes de madera y trabajos personalizados a medida',
                footer: 'Disponemos de las muestras en nuestro catálogo.',
            },
            bg_img: 'https://via.placeholder.com/150',
            path: '',
        },
    ];
}

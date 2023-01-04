import { Component } from '@angular/core';

@Component({
    selector: 'app-catalogue',
    template: `
        <p>small hero</p>

        <div *ngFor="let section of sections" class="row">
            <div class="container">
                <div class="test_box box-01 col-xs-6 col-md-4">
                    <div class="inner">
                        <a href="#" class="test_click">
                            <div class="flex_this">
                                <header class="test_title">
                                    <h2>{{ section.title }}</h2>
                                </header>
                                {{ section.content.main }}
                                <footer>
                                    <p>{{ section.content.footer }}</p>
                                    <button mat-button class="test_link">
                                        visitar
                                    </button>
                                </footer>
                                <!--<h1 class="test_title">Title</h1>
                                    <span class="test_link">Link</span>-->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!--<div *ngFor="let section of sections" [ngStyle]="{'background-image:': section.bg_img}">-->
        </div>
        <div class="row">
            <div class="container">
                <div class="test_box box-01 col-xs-6 col-md-4">
                    <div class="inner">
                        <a href="#" class="test_click">
                            <div class="flex_this">
                                <h1 class="test_title">Title</h1>
                                <span class="test_link">Link</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['catalogue.component.scss'],
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

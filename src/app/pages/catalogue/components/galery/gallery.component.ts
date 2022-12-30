import { Component, Input } from '@angular/core';
import { Image } from '@core/models/image';
import { Catalogue_Section } from '@core/models/catalogue_section';

@Component({
    selector: 'app-gallery',
    template: `<!-- TODO: titulo y galeria salen invertidos-->
        <app-header-section
            [header_content]="gallery.header"
            *ngIf="gallery.header !== undefined"></app-header-section>
        <mat-grid-list cols="3" rowHeight="2:1">
            <mat-grid-tile *ngFor="let image of images">
                <figure>
                    <img
                        [ngSrc]="image.path"
                        [alt]="image.alt"
                        [width]="image.width"
                        [height]="image.height" />
                </figure>
            </mat-grid-tile>
        </mat-grid-list>
        <footer *ngIf="gallery.footer !== undefined">
            <p
                *ngFor="let paragraph of gallery.footer"
                [innerHTML]="paragraph"></p>
        </footer>`,
})
export class GalleryComponent {
    @Input() gallery: Catalogue_Section = {
        images: [],
    };
    images: Image[] = [
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
        {
            path: 'https://via.placeholder.com/150',
            alt: 'algo',
            width: 150,
            height: 150,
        },
    ];
}

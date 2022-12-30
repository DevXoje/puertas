import { Component, Input } from '@angular/core';
import { Catalogue_Section } from '@core/models/catalogue_section';

@Component({
    selector: 'app-catalogue-section',
    template: `<p *ngIf="withHero">hero</p>
        <app-gallery *ngFor="let gallery of galleries" [gallery]="gallery">
        </app-gallery>

        <app-call-to-call *ngIf="withCallToCall"></app-call-to-call>
        <app-call-to-social-media
            *ngIf="withCallToAction"></app-call-to-social-media>

        <app-galery-cards *ngIf="withCards"></app-galery-cards>`,
})
export class CatalogueSectionComponent {
    @Input() galleries: Catalogue_Section[] = [];
    @Input() withHero = true;
    @Input() withCallToCall = true;
    @Input() withCallToAction = true;
    @Input() withCards = true;
}

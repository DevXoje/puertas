import { Component, Input } from '@angular/core';
import { Catalogue_Section } from '@core/models/catalogue_section';

@Component({
  selector: 'app-catalogue-section',
  template: `<p>hero</p>

    <app-galery *ngFor="let gallery of galleries">
      <ng-container *ngIf="gallery.header !== undefined">
        <header>
          <h2>{{ gallery.header.title }}</h2>
          <p *ngFor="let item of gallery.header.content">{{ item }}</p>
        </header>
      </ng-container>
    </app-galery>

    <app-call-to-call></app-call-to-call>
    <app-call-to-social-media></app-call-to-social-media>

    <app-galery-cards></app-galery-cards>`,
})
export class CatalogueSectionComponent {
  @Input() galleries: Catalogue_Section[] = [];
}

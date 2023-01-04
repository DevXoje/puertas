import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SectionHeader } from '@core/models/Section';
import { Display } from '@core/models/Common';

@Component({
    selector: 'app-section',
    template: ` <mat-grid-list cols="3" rowHeight="150px">
        <mat-grid-tile [colspan]="3" [rowspan]="1" #content>
            <app-header-section
                [display]="display"
                [header_content]="header"></app-header-section>
            <ng-content select=".header"></ng-content>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="isLeftBigger ? 2 : 1" [rowspan]="3">
            <ng-content select=".left-place"></ng-content>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="isLeftBigger ? 1 : 2" [rowspan]="3">
            <ng-content select=".right-place"></ng-content>
        </mat-grid-tile>
    </mat-grid-list>`,
    styles: [
        `
            //Todo: Hacer que estos style funcionen. Ahora estan en style.scss
            /* p {
              font-size: 0.875rem;
              line-height: 1.7;
              color: #777777;
          }*/
        `,
    ],
})
export class SectionComponent implements OnInit {
    @ViewChild('content', { read: ElementRef, static: true })
    content?: ElementRef;
    @Input() isLeftBigger = false;
    @Input() header: SectionHeader = {
        title: '',
    };
    @Input() display?: Display = 'center';

    ngOnInit() {
        console.log(!!this.content?.nativeElement.innerHTML); // return true if there is a content
        console.log(this.content?.nativeElement.innerHTML);
    }
}

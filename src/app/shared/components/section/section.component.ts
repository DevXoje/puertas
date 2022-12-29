import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Tile } from '@core/models/Tile';

@Component({
    selector: 'app-section',
    template: ` <mat-grid-list cols="3" rowHeight="150px">
        <mat-grid-tile [colspan]="3" [rowspan]="1" #content>
            <ng-content select=".header"></ng-content>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="isLeftBigger ? 2 : 1" [rowspan]="3">
            <ng-content select=".left-place"></ng-content>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="isLeftBigger ? 1 : 2" [rowspan]="3">
            <ng-content select=".right-place"></ng-content>
        </mat-grid-tile>
    </mat-grid-list>`,
})
export class SectionComponent implements OnInit {
    @ViewChild('content', { read: ElementRef, static: true })
    content?: ElementRef;
    @Input() isLeftBigger = false;
    tiles: Tile[] = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
    ngOnInit() {
        console.log(!!this.content?.nativeElement.innerHTML); // return true if there is a content
        console.log(this.content?.nativeElement.innerHTML);
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `
        <mat-grid-list
            cols="1"
            rowHeight="2:1"
            class="back"
            style="text-align: center">
            <mat-grid-tile>
                <h1>Puertas CARLOS HARO APARICIO</h1>
            </mat-grid-tile>
            <!-- <mat-grid-tile>a</mat-grid-tile> -->
        </mat-grid-list>
    `,
    styles: [
        `
            .back {
                background-image: url('../../../../assets/img/p-35.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        `,
    ],
})
export class HeroComponent {}

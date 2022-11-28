import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
	MatGridListModule,
	MatGridList,
	MatGridTile,
} from '@angular/material/grid-list';

/* import {
    MatCardModule,
} from '@angular/material'; */
const materialModules = [
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatInputModule,
	MatSelectModule,
	MatRadioModule,
	MatCardModule,
	MatGridListModule,
];
const components = [MatGridList, MatGridTile];
@NgModule({
	declarations: [
		/* ...components */
	],
	imports: [...materialModules, CommonModule],
	exports: [...materialModules /* ...components */],
})
export class MaterialModule {}

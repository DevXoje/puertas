import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BRAND_LOGO } from '@core/models/static';
import { Image } from '@core/models/image';
import { NavigationEnd, ResolveEnd, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    template: `
        <mat-toolbar color="primary" class="navbar navbar__basic">
            <!--<img
        [width]="logo.width"
        [height]="logo.height"
        [ngSrc]="logo.path"
        [alt]="logo.alt" />-->
            <span class="example-spacer"></span>
            <a [routerLink]="['/home']">Home</a>
            <button
                mat-button
                [matMenuTriggerFor]="menu"
                #clickHoverMenuTrigger="matMenuTrigger">
                <a [routerLink]="['/catalogue']">Nuestro catalogo</a>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item *ngFor="let item of sections_catalogue">
                    <a [routerLink]="[item.path]">{{ item.name }}</a>
                </button>
            </mat-menu>
            <a [routerLink]="['/empresa']">Empresa</a>
            <a [routerLink]="['/contact']">Contacto</a>

            <button
                mat-icon-button
                class="example-icon"
                aria-label="Example icon-button with menu icon">
                <mat-icon>menu</mat-icon>
            </button>
        </mat-toolbar>
        <ng-content></ng-content>
    `,
    styles: [
        `
            .sidenav .mat-toolbar {
                background: inherit;
            }

            .mat-toolbar.mat-primary {
                top: 0;
                z-index: 1;
            }

            .example-spacer {
                flex: 1 1 auto;
            }

            .navbar {
                position: fixed;
            }

            .navbar__inverse {
                background-color: red;
            }

            .navbar__basic {
                background-color: transparent;
            }
        `,
    ],
})
export class NavbarComponent {
    logo: Image = BRAND_LOGO;
    sections_catalogue = [
        {
            name: 'puertas de entrada',
            path: 'catalogue/entrada',
        },
        {
            name: 'puertas internas',
            path: 'catalogue/interior',
        },
        {
            name: 'armarios y vestidores',
            path: 'catalogue/armarios',
        },
        {
            name: 'trabajos especiales',
            path: 'catalogue/especiales',
        },
    ];
    inHome = false;
    /* @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger?: MatMenuTrigger;*/
    constructor(
        private breakpointObserver: BreakpointObserver,
        private router: Router
    ) {
        this.router.events.subscribe((val: any) => {
            if (val instanceof ResolveEnd) {
                this.inHome = val.url == '/' || val.url == '/home';
            }
        });
    }
    /*openMenu() {
    this.clickHoverMenuTrigger?.openMenu();
  }
  closeMenu() {
    this.clickHoverMenuTrigger?.closeMenu();
  }*/
    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const element = document.querySelector('mat-toolbar') as HTMLElement;
        if (window.scrollY > element.clientHeight) {
            element.classList.add('navbar__inverse');
            element.classList.remove('navbar__basic');
        } else {
            element.classList.add('navbar__basic');
            element.classList.remove('navbar__inverse');
        }
    }
}

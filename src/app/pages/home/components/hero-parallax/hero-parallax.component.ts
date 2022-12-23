import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-parallax',
  templateUrl: './hero-parallax.component.html',
  styles: [
    `
      .parallax {
        background-image: url('../../../../../assets/img/Fachada.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: stretch;
      }
    `,
  ],
})
export class HeroParallaxComponent {}

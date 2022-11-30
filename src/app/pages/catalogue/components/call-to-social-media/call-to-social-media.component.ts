import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-call-to-social-media',
  template: `<h2>{{ title }}</h2>
    <p *ngFor="let item of content">{{ item }}</p>
    <fa-icon [icon]="icon_facebook"></fa-icon> `,
})
export class CallToSocialMediaComponent {
  title = 'Compartimos en las redes sociales';
  content = [
    'Si te gustaría conocer más sobre la calidad de nuestras puertas de exterior no puedes eprderte nuestras redes sociales. Compartimos en las redes la instalación en directo de las puertas en exterior que ofrecemos a nuestros clientes, así como el transporte.',
    'Además damos nuestros productos muy orgullosos y con el servicio cercano de nuestro equipo que te asesorará en todo el proceso de compra e instalación.',
    'Pulsa en los iconos para seguir al equipo de Puertas Carlos Haro',
  ];
  icon_facebook = faFacebook;
}

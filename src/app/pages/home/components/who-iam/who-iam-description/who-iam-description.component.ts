import { Component } from '@angular/core';

@Component({
  selector: 'app-who-iam-description',
  template: `<h2>Servicios de calidad para tu espacio</h2>
    <div>
      <p *ngFor="let item of content">
        {{ item }}
      </p>
      <button mat-raised-button color="warn">
        <a href="/empresa-puertas-carlos-haro/">Sobre nuestra empresa</a>
      </button>
    </div>
    faltan 2 fotos`,
})
export class WhoIAmDescriptionComponent {
  content = [
    `Bienvenidos a Puertas Carlos Haro donde te ofrecemos gran variedad de
		puertas, ventanas y armarios de varios estilos.`,
    `Llevamos más de 30 años de experiencia en el sector de la madera y a la
		renovación de puertas antiguas.`,
    `Nuestro objetivo principal es satisfacer a nuestros clientes ofreciendo
		un trato y un servicio excelentes además de calidad en nuestros
		productos.`,
  ];
}

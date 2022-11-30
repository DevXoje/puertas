import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-call',
  template: `
    <hr />
    <p *ngFor="let item of content">{{ item }}</p>
    <hr />
  `,
})
export class CallToCallComponent {
  content = [
    'Puedes contactárnos para cualquier consulta llamándonos a nuestro teléfono',
    '607 951 449',
    'De la misma forma, atendemos Whatsapp para ofrecerte el mejor servicio en cualquier momento.',
  ];
}

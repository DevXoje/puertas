import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CallToContactComponent } from './components/call-to-contact/call-to-contact.component';
import { DoubtsFormComponent } from './components/doubts-form/doubts-form.component';
import { WhereWeAreComponent } from './components/where-we-are/where-we-are.component';
import { MaterialModule } from '../../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ContactComponent,
    CallToContactComponent,
    DoubtsFormComponent,
    WhereWeAreComponent,
  ],
  imports: [CommonModule, ContactRoutingModule, FontAwesomeModule],
})
export class ContactModule {}

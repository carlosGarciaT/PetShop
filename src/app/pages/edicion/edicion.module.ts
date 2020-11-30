import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { EdicionComponent } from './edicion.component';
import { PetFactoryModule } from 'pet-factory';


@NgModule({
  declarations: [EdicionComponent],
  imports: [
    CommonModule,
    EdicionRoutingModule,
    PetFactoryModule
  ]
})
export class EdicionModule { }

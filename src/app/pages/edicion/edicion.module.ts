import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { EdicionComponent } from './edicion.component';
import { PetFactoryModule } from 'pet-factory';
import { ContainerPetfactoryComponent } from '../container-petfactory/container-petfactory.component';

@NgModule({
  declarations: [EdicionComponent, ContainerPetfactoryComponent],
  imports: [CommonModule, EdicionRoutingModule, PetFactoryModule]
})
export class EdicionModule {}

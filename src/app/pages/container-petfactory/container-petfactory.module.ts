import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerPetfactoryComponent } from './container-petfactory.component';
import { PetFactoryModule } from 'pet-factory';

@NgModule({
  declarations: [ContainerPetfactoryComponent],
  imports: [CommonModule, PetFactoryModule]
})
export class ContainerPetfactoryModule {}

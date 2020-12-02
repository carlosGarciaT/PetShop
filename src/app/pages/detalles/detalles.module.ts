import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';
import { PetListLibraryModule } from 'pet-list-library';
import { FormsModule } from '@angular/forms';
import { ContainerPetlistComponent } from '../container-petlist/container-petlist.component';

@NgModule({
  declarations: [DetallesComponent, ContainerPetlistComponent],
  imports: [CommonModule, DetallesRoutingModule, FormsModule, PetListLibraryModule]
})
export class DetallesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerPetlistComponent } from './container-petlist.component';
import { PetListLibraryModule } from 'pet-list-library';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContainerPetlistComponent],
  imports: [CommonModule, FormsModule, PetListLibraryModule]
})
export class ContainerPetlistModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ErrorComponent } from './shared/error/error.component';
import { ContainerPetListComponent } from './pages/container-pet-list/container-pet-list.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { PetListLibraryModule } from 'pet-list-library';
import { FormsModule } from '@angular/forms';
import { PetFactoryModule } from 'pet-factory';
import { ContainerPetFactoryComponent } from './pages/container-pet-factory/container-pet-factory.component';
import { EdicionComponent } from './pages/edicion/edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ContainerPetListComponent,
    DetallesComponent,
    ContainerPetFactoryComponent,
    EdicionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PetListLibraryModule, PetFactoryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

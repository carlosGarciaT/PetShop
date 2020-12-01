import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { ContainerPetListComponent } from './pages/container-pet-list/container-pet-list.component';
import { ContainerPetFactoryComponent } from './pages/container-pet-factory/container-pet-factory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  // { path: 'detalles', loadChildren: () => import('./pages/detalles/detalles.module').then(m => m.DetallesModule) },
  { path: 'detalles', component: ContainerPetListComponent },
  // { path: 'edicion', loadChildren: () => import('./pages/edicion/edicion.module').then((m) => m.EdicionModule) },
  { path: 'edicion', component: ContainerPetFactoryComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

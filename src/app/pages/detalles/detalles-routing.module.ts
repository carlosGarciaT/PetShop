import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesComponent } from './detalles.component';

const routes: Routes = [{ path: '', component: DetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesRoutingModule {}

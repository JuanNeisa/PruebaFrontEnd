import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [BuscarComponent, ListarComponent],
  imports: [
    CommonModule,
    Modulo1RoutingModule
  ]
})
export class Modulo1Module { }

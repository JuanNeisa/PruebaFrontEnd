import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [AgregarComponent, TopComponent],
  imports: [
    CommonModule,
    Modulo2RoutingModule
  ]
})
export class Modulo2Module { }

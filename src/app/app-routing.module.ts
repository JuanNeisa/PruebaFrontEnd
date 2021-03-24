import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path:'buscar',loadChildren: ()=>
  import('./Componentes/modulo1/buscar/buscar.module').then(m=>m.BuscarModule)
},
{
  path:'listar',loadChildren: ()=>
  import('./Componentes/modulo1/listar/listar.module').then(m=>m.ListarModule)
},
{
  path:'agregar',loadChildren: ()=>
  import('./Componentes/modulo2/agregar/agregar.module').then(m=>m.AgregarModule)
},
{
  path:'top',loadChildren: ()=>
  import('./Componentes/modulo2/top/top.module').then(m=>m.TopModule)
},
{ path: '', redirectTo: 'buscar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

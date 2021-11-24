import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'productos/list',
    component: ProductosListComponent
  },

  {
    path: 'productos/create',
    component: ProductosFormComponent
  },

  {
    path: 'productos/edit/:id',
    component: ProductosFormComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Iproductos } from '../productos.interface';
import { ProductosService } from '../service/productos.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  productos: Iproductos = {
    IdProd:0,
    nombreProd:'',
    claseProd:'',
    valor:0
  }

  constructor(
    private readonly productosService : ProductosService,
    private readonly router: Router) { }


  ngOnInit(): void {

  }

  createProductos(){
    this.productosService.createProductos(this.productos).subscribe(
      
      res => {
        
      console.log(res);
      this.router.navigate(['productos/list']);
      },

      err => console.log(err)
      
    );
    
  }

}

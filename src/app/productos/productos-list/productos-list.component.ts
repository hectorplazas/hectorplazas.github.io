import { Component, OnInit } from '@angular/core';
import { Iproductos } from '../productos.interface';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productosList:Iproductos[] = [];

  constructor(private readonly productosService : ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => this.productosList = res,
      err => console.log(err)

    ); 
  }

  deleteProductos(id:number){
    this.productosService.deleteProductos(id)
    .subscribe(
      res=>{

        this.getProductos();
        console.log(res);


      },
      err => console.log(err)
         


    )




  }


}

import { Component, OnInit } from '@angular/core';
import { Iproductos } from '../productos.interface';
import { ProductosService } from '../service/productos.service';
import { ActivatedRoute, Router } from "@angular/router"

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

  IdProduct = -1;

  constructor(
    private readonly productosService : ProductosService,
    private readonly router: Router, private route:ActivatedRoute) { }


  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    if(id){
      this.IdProduct = id;
      this.loadProduct(id);
    }
    
    }
  

  loadProduct(id:number){
    this.productosService.getProductosbyid(id).subscribe(
      res=> {
        this.productos.IdProd = res.IdProd;
        this.productos.nombreProd = res.nombreProd;
        this.productos.claseProd = res.claseProd;
        this.productos.valor = res.valor;
      },
      err => console.log(err)

    );

  };
  

  createProductos(){
    if(this.IdProduct=== -1){
      this.productosService.createProductos(this.productos).subscribe(     
        res => {  
          console.log(res);
          this.router.navigate(['productos/list']);
      },
      err => console.log(err)
      
    );

    }
    else{
      this.productosService.updateProductos(this.IdProduct, this.productos).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['productos/list']);
        },
        err => console.log(err)

      );










    }

    
    
    
  }

}

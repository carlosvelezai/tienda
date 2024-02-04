import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
    selector: 'app-productos-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    
    public productos: Producto[] = [{
        id: '1',
        name: 'Celular Iphone',
        valor: 3000000
    },
    {
        id: '2',
        name: 'Tablet Samsung Galaxy',
        valor: 5000000   
    },
    {
        id: '3',
        name: 'Impresora HP',
        valor: 1200000
    },
    {
        id: '4',
        name: 'HP',
        valor: 5555
    },
];

onNewProducto(product: Producto): void{
    console.log(product)
    this.productos.push(product);
    console.log(this.productos)

}

}
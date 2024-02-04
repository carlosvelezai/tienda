import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'productos-add-producto',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {

  @Output()
  public onNewProducto: EventEmitter<Producto> = new EventEmitter();
    
    
  public producto: Producto = {
      id: '',
      name: '',
      valor: 0
  };

  emitProducto():void{

      //debugger;

      console.log(this.producto);

      if (this.producto.name.length === 0) return;

      this.onNewProducto.emit(this.producto);

      this.producto = { id: "", name: "", valor:0};
      // El siguiente codito es reemplazado por el de la linea 33, menos lineas de codigo.
      // this.producto.id = '';
      // this.producto.name = '';
      // this.producto.valor = 0;
    }
 }

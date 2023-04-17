import { Component } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
  selector: 'app-expositor-libros',
  templateUrl: './expositor-libros.component.html',
  styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent {

  modoElegido: string = 'Consultar';
  librosOfrecidos: Libro[] = [];
  librosComprados: Libro[] = [];


  ngOnInit() {
    const libro1: Libro = {
      titulo: 'Cien años de soledad',
      cantidadPaginas: 550,
      autor: 'Gabriel Garcia Marquez',
      stock: 10,
      precio: 7
    }
    const libro2: Libro = {
      titulo: 'Cronicas de una muerte anunciada',
      cantidadPaginas: 150,
      autor: 'Gabriel Garcia Marquez',
      stock: 15,
      precio: 10
    }
    const libro3: Libro = {
      titulo: 'El lazarillo de tormes',
      cantidadPaginas: 150,
      stock: 15,
      precio: 10
    }
    this.librosOfrecidos = [libro1, libro2];
    this.librosOfrecidos.push(libro3);

  }


  /**
   * Cambia el modo elegido
   * @param modoDeseado Nuevo modo a setear
   */
  cambiarModo(modoDeseado: string): void {
    this.modoElegido = modoDeseado;
  }

  cambiaLibro() {
    this.librosOfrecidos[0].titulo = 'Abadakadabra';
    this.librosOfrecidos.push(this.librosOfrecidos[0]);
  }

  gestionaCompra(libro: Libro) {
    this.librosComprados.push(libro);
  }


}

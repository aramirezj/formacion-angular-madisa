import { Component, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { Observable } from 'rxjs';
import { LibroService } from '../services/libro.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-expositor-libros',
  templateUrl: './expositor-libros.component.html',
  styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent {

  modoElegido: string = 'Consultar';
  /** Cátalogo de libros a mostrar */
  librosOfrecidos: Libro[] = [];
  /** Cátalogo de libros comprados */
  librosComprados: Libro[] = [];

  libroService:LibroService =  inject(LibroService);
  configService:ConfigService =  inject(ConfigService);
  ngOnInit() {
    this.configService.tituloWeb.next('Expositor de libros');


    this.libroService.miLibroFavorito = 'El relato de un naufrago';

    /*this.recuperarLibrosPromesa().then(librosBBDD => {
      this.librosOfrecidos = librosBBDD;
    }) */
    this.recuperarLibrosObservable().subscribe(librosBBDD => {
      this.librosOfrecidos = librosBBDD;
    });

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

  sacarLibro(libro: Libro) {

    //indexOf  saca indice del elemento pasado por parametro
    //splice elimina elementos según X posición y X cantidad de elementos a borrar
    //slice LO MISMO pero no modifica el array, devuelve una copia
    //forEach iterar
    /* this.librosComprados.findIndex(libroFiltro => libroFiltro.titulo === libro.titulo); //devuelve indice
     this.librosComprados.find(libroFiltro => libroFiltro.titulo === libro.titulo); //devuelve el elemento
     this.librosComprados.filter(libroFiltro => libroFiltro.titulo === libro.titulo); //devuelve ARRAY de elementos
     this.librosComprados.at(-1)*/


    this.librosComprados.splice(this.librosComprados.indexOf(libro), 1);

  }




  recuperarLibrosPromesa(): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      //CÓDIGO A EJECUTAR, CUANDO ALGUIEN SOLICITE LA PROMESA
      setTimeout(() => {
        //CÓDIGO A EJECUTAR
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

        const librosBBDD: Libro[] = [libro1, libro2, libro3];
        resolve(librosBBDD);
      }, 2000);

    });
  }

  recuperarLibrosObservable(): Observable<Libro[]> {
    return new Observable<Libro[]>(observer => {
      setTimeout(() => {
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

        const librosBBDD: Libro[] = [libro1, libro2, libro3];

        observer.next(librosBBDD);
        observer.complete();


      }, 2000)
    });
  }


}

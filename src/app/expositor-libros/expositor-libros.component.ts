import { Component, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
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

  libroService: LibroService = inject(LibroService);
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.configService.tituloWeb.next('Expositor de libros');
  }
  ngOnInit() {
    this.recuperarLibros();
    this.libroService.miLibroFavorito = 'El relato de un naufrago';
  }

  borrarLibro(libroABorrar: Libro) {
    this.libroService.borrarLibro(libroABorrar.id).subscribe(() => this.recuperarLibros());
  }

  recuperarLibros() {
    this.libroService.recuperarLibros().subscribe(librosBBDD =>
      this.librosOfrecidos = librosBBDD
    );
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





}

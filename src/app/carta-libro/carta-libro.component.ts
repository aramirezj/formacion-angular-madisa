import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-libro',
  templateUrl: './carta-libro.component.html',
  styleUrls: ['./carta-libro.component.scss']
})
export class CartaLibroComponent {
  @Input() libro: Libro;
  @Input() estaEnCarrito: boolean;
  @Output() comprado: EventEmitter<Libro> = new EventEmitter();
  @Output() sacar: EventEmitter<void> = new EventEmitter();
  @Output() borrar: EventEmitter<void> = new EventEmitter();

  router: Router = inject(Router);


  comprar() {
    this.comprado.emit(this.libro);
  }

  sacarLibro() {
    this.sacar.emit();
  }

  editarLibro() {
    this.router.navigateByUrl('edicionLibro/' + this.libro.id);
  }

  borrarBoton() {
    this.borrar.emit();
  }
}

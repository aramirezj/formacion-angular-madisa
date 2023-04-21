import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Libro } from '../interfaces/Libro';
import { LibroService } from '../services/libro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creacion-libro',
  templateUrl: './creacion-libro.component.html',
  styleUrls: ['./creacion-libro.component.scss']
})
export class CreacionLibroComponent {
  formularioCreacion: FormGroup;
  libroService:LibroService = inject(LibroService);
  snackbar:MatSnackBar = inject(MatSnackBar);
  libroBBDD:Libro | undefined;



  ngOnInit() {
    this.formularioCreacion = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(),
      cantidadPaginas: new FormControl(),
      autor: new FormControl(),
      stock: new FormControl(),
      precio: new FormControl()
    })
  }

  crearLibro() {
    const libroPreparado: Libro = this.formularioCreacion.value;
    
    this.libroService.crearLibro(libroPreparado).subscribe(libroBBDD => {
      this.libroBBDD = libroBBDD;
      this.snackbar.open('Libro creado correctamente!');
    })
  }
}

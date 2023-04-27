import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Libro } from '../interfaces/Libro';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.scss']
})
export class FormularioLibroComponent {
  formularioLibro: FormGroup;
  libroService: LibroService = inject(LibroService);
  snackbar: MatSnackBar = inject(MatSnackBar);
  libroBBDD: Libro | undefined;


  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);


  ngOnInit() {

    this.formularioLibro = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(),
      cantidadPaginas: new FormControl(),
      autor: new FormControl(),
      stock: new FormControl(),
      precio: new FormControl()
    });

    //Cómo recuperar params de la ruta
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      const id: string | null = paramsMap.get('id');
      if (id) {
        this.libroService.recuperarLibro(parseInt(id)).subscribe(libroBBDD => {
          this.formularioLibro.setValue(libroBBDD);
        });
        //this.formularioLibro.get('id')?.setValue(parseInt(id));
      }
    });


  }

  guardarLibro() {
    const libroPreparado: Libro = this.formularioLibro.value;

    if (libroPreparado.id) {
      this.libroService.actualizarLibro(libroPreparado).subscribe(() => {
        this.router.navigateByUrl('expositor');
      });
      
    } else {
      this.libroService.crearLibro(libroPreparado).subscribe(libroBBDD => {
        this.libroBBDD = libroBBDD;
        this.snackbar.open('Libro creado correctamente!');
      })
    }



  }
}

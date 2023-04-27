import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { CartaLibroComponent } from './carta-libro/carta-libro.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { SharedModule } from '../shared/shared.module';
import { LibroService } from './services/libro.service';


@NgModule({
  declarations: [
    ExpositorLibrosComponent,
    FormularioLibroComponent,
    CartaLibroComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    SharedModule
  ],
  providers: [LibroService]
})
export class LibroModule { }

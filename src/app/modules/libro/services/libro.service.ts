import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/modules/libro/interfaces/Libro';

@Injectable()
export class LibroService {
  miLibroFavorito: string = 'Cien años de soledad';
  spinner: NgxSpinnerService = inject(NgxSpinnerService);
  httpClient: HttpClient = inject(HttpClient);
  notificacion: MatSnackBar = inject(MatSnackBar);
  apiUrl: string = environment.api + 'Libros';

  constructor() { }

  recuperarLibro(id: number): Observable<Libro> {
    return new Observable<Libro>(observer => {
      this.httpClient.get<Libro>(`${this.apiUrl}/${id}`).subscribe(libroBBDD => {
        observer.next(libroBBDD);
        observer.complete();
      });
    });
  }

  recuperarLibros(): Observable<Libro[]> {
    return new Observable<Libro[]>(observer => {
      this.httpClient.get<Libro[]>(this.apiUrl).subscribe(librosBBDD => {
        observer.next(librosBBDD);
        observer.complete();
      });
    });
  }

  crearLibro(libro: Libro): Observable<Libro> {
    return new Observable<Libro>(observer => {
      this.httpClient.post<Libro>(this.apiUrl, libro).subscribe(respuestaAPI => {
        observer.next(respuestaAPI);
        observer.complete();
      });
    });
  }

  actualizarLibro(libroAActualizar: Libro): Observable<Libro> {
    return new Observable<Libro>(observer => {
      this.httpClient.put<Libro>(`${this.apiUrl}/${libroAActualizar.id}`, libroAActualizar).subscribe(libroActualizado => {
        this.notificacion.open('Libro actualizado correctamente', 'Cerrar', { duration: 2000 });
        observer.next(libroActualizado);
        observer.complete();
      });
    });
  }

  borrarLibro(id: number): Observable<void> {
    //queryParam aportar información extra, apiUrl/libros/paginado?page=1;pageSize=10;
    //pathparam
    // Path param, se trata para identificadores y acceder a dominios
    //      apiUrl/libros/IDLIBRO
    //      apiUrl/biblioteca/IDBIBLIOTECA/libros/IDLIBRO
    return new Observable<void>(observer => {
      //localhost:3000/libros/55
      //this.apiUrl+'/'+id
      this.httpClient.delete<void>(`${this.apiUrl}/${id}`).subscribe(() => {
        observer.next();
        observer.complete();
      });
    });
  }


  recuperarLibrosObservable(): Observable<Libro[]> {
    return new Observable<Libro[]>(observer => {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();


        const librosBBDD: Libro[] = [];

        observer.next(librosBBDD);
        observer.complete();
      }, 2000)

    });
  }
}

import { Injectable, inject } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibroService {
  miLibroFavorito: string = 'Cien años de soledad';
  loginService: LoginService = inject(LoginService);
  spinner: NgxSpinnerService = inject(NgxSpinnerService);
  httpClient: HttpClient = inject(HttpClient);
  constructor() {


  }

  recuperarLibros(): Observable<Libro[]> {
    return new Observable<Libro[]>(observer => {
      this.httpClient.get<Libro[]>('http://localhost:3000/libros').subscribe(librosBBDD => {
        observer.next(librosBBDD);
        observer.complete();
      });
    })


  }

  crearLibro(libro:Libro): Observable<Libro> {
    return new Observable<Libro>(observer => {
      this.httpClient.post<Libro>('http://localhost:3000/libros',libro).subscribe(librosBBDD => {
        observer.next(librosBBDD);
        observer.complete();
      });
    })


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

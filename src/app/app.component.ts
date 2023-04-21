import { Component, inject } from '@angular/core';
import { LibroService } from './services/libro.service';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string | undefined;

  libroService: LibroService = inject(LibroService);
  configService: ConfigService = inject(ConfigService);

  constructor(){
    this.configService.tituloWeb.subscribe(nuevoTituloWeb => {
      console.log('NUEVO TITULO RECIBIDO')
      this.title = nuevoTituloWeb;
    })
  }

  ngOnInit() {




    this.libroService.miLibroFavorito = 'Crónicas de una muerte anunciada';
  }
}

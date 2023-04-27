import { Component, inject } from '@angular/core';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string | undefined;

  configService: ConfigService = inject(ConfigService);
  
  constructor(){
    this.configService.tituloWeb.subscribe(nuevoTituloWeb => {
      this.title = nuevoTituloWeb;
    })
  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConfigService {
  tituloWeb: BehaviorSubject<string> = new BehaviorSubject('Inicio');
  constructor() { }
}

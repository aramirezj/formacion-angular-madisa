import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGenericaComponent } from './tabla-generica/tabla-generica.component';
import { FeaturePrivadaComponent } from './feature-privada/feature-privada.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablaGenericaComponent,
    FeaturePrivadaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    TablaGenericaComponent,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

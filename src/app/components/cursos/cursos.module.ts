import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from '../cursos-detalhe/cursos-detalhe.component';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@NgModule({
  declarations: [CursosComponent, CursosDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [UsuarioServiceService]
})
export class CursosModule { }

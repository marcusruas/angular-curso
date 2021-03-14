import { Component } from '@angular/core';

import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'cursos-component',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  nome: string;
  cursos: string[];

  constructor(private service: UsuarioServiceService) {
    this.nome = 'Marcus.';

    this.cursos = service.getCursos();
  }
}

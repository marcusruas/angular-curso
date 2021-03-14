import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor() { }

  getCursos() {
    return ["Java", "C#"];
  }
}

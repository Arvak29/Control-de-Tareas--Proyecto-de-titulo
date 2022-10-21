import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroRol',
})
export class FiltroRolPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const rol of value) {
      if (rol.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(rol);
      }
    }
    return resultado;
  }
}

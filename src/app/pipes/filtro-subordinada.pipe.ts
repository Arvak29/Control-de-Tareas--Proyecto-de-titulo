import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSubordinada',
})
export class FiltroSubordinadaPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const tareasub of value) {
      if (
        tareasub.nombre_ts.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultado.push(tareasub);
      }
    }
    return resultado;
  }
}

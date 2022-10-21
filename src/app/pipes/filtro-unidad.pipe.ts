import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUnidad',
})
export class FiltroUnidadPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const unidad of value) {
      if (
        unidad.nombre_unidad_i.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultado.push(unidad);
      }
    }
    return resultado;
  }
}

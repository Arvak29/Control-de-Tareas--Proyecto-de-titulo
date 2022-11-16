import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFlujo',
})
export class FiltroFlujoPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const flujo of value) {
      if (flujo.nombre_ft.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(flujo);
      }
    }
    return resultado;
  }
}

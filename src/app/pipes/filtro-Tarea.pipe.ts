import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const tarea of value) {
      if (tarea.nombre_t.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(tarea);
      }
    }
    return resultado;
  }
}

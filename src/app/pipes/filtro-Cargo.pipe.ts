import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroCargoPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const cargo of value) {
      if (cargo.nombre_c.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(cargo);
      }
    }
    return resultado;
  }
}

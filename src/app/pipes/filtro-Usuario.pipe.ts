import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuario',
})
export class FiltrousuarioPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const usuario of value) {
      if (
        usuario.nombre_usuario.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultado.push(usuario);
      }
    }
    return resultado;
  }
}

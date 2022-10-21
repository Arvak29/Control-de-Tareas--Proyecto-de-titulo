import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUnidad'
})
export class FiltroUnidadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

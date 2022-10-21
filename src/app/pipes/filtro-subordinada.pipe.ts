import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSubordinada'
})
export class FiltroSubordinadaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

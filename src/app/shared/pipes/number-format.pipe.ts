import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value?: number): string {
    if (!value) return '';
    return value.toLocaleString('en-US');
  }
}

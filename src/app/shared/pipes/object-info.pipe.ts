import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectInfo',
  standalone: true,
})
export class ObjectInfoPipe implements PipeTransform {
  transform(
    value: Record<string, any>,
    type: 'languages' | 'currencies'
  ): string {
    if (!value) return '';
    if (type === 'languages') return Object.values(value).join(', ');
    if (type === 'currencies') {
      const currencies: Array<{ name: string; symbol: string }> =
        Object.values(value);
      return currencies.map((currency) => currency.name).join(', ');
    }
    return '';
  }
}

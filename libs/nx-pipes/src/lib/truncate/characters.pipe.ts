import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'characters'
})
export class CharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: String = '…'): string {
    if (!value) {
      value = '';
    }

    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}

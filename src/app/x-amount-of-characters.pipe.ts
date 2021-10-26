import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xAmountOfCharacters'
})
export class XAmountOfCharactersPipe implements PipeTransform {

  transform(value: any) {
    return value.substr(0,5) + "...";
  }

}

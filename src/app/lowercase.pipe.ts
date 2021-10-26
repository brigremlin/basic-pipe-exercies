import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'lowercase'
})

export class LowerCasePipe implements PipeTransform{
  transform(value: string) {
    return value.toLowerCase();
  }
}

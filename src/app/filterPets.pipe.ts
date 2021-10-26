
import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
  name: "filter"
})

export class FilterPetsPipe implements PipeTransform {
  transform(value: any[], filteringString: string) {
    const results: string[] = [];
    for(const item of value ) {
      if(item.startsWith(filteringString)) {
        results.push(item);
      }
    }
    return results;
  }

}

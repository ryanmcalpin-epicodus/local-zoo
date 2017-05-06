import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "ageSort",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], filterBy: string) {
    var output: Animal[] = [];
    if (filterBy==='young') {
      input.forEach(function(e) {
        if (e.age <= 2) {
          output.push(e);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}

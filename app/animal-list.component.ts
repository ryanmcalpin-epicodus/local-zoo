import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div>
    <p *ngFor="let animal of animals">{{animal.name}} the {{animal.species}}</p>
  </div>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  
}

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div>
    <div class="panel panel-default" *ngFor="let animal of animals">
      <div (click)="viewDetails(animal)" class="panel-body animal-list-item">
      {{animal.name}} the {{animal.species}}
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() detailsSender = new EventEmitter();

  viewDetails(animal: Animal) {
    this.detailsSender.emit(animal);
  }

}

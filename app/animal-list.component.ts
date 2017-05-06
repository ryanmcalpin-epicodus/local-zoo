import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div>
    <h3 id="animals-title">Animals</h3>
    <hr class="line">
    <span (click)="sortYoung()" class="sort-span">2 & UNDER</span>
    <hr class="line">
    <div class="panel panel-default" *ngFor="let animal of animals | ageSort:filterBy" id="list-div">
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

  filterBy: string = null;

  viewDetails(animal: Animal) {
    this.detailsSender.emit(animal);
  }

  sortYoung() {
    this.filterBy = "young";
  }

}

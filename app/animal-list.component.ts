import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div>
    <h2 id="animals-title">Animals</h2>
    <hr class="line">
    <div id="sort-bar">
      <div (click)="sort()" [class]="sortStyleAll" >ALL ANIMALS</div>
      <div (click)="sort('young')" [class]="sortStyleBabies">BABIES</div>
      <div (click)="sort('old')" [class]="sortStyleAdults">ADULTS</div>
    </div>
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
  sortStyleAll: string = "sort-div"
  sortStyleAdults: string = "sort-div"
  sortStyleBabies: string = "sort-div"

  viewDetails(animal: Animal) {
    this.detailsSender.emit(animal);
  }

  sort(sortBy: string) {
    if (sortBy==='old') {
      this.sortStyleAdults = "sort-div-selected";
      this.sortStyleAll = "sort-div";
      this.sortStyleBabies = "sort-div";
    } else if (sortBy==='young') {
      this.sortStyleBabies = "sort-div-selected";
      this.sortStyleAll = "sort-div";
      this.sortStyleAdults = "sort-div";
    } else {
      this.sortStyleAll = "sort-div-selected";
      this.sortStyleAdults = "sort-div";
      this.sortStyleBabies = "sort-div";
    }

    this.filterBy = sortBy;
  }

}

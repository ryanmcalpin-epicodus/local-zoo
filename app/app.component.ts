import { Component } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <button (click)="clickNew()" id="add-butt" class="btn-lg right">NEW ANIMAL</button>
    <h1>Local Zoo</h1>
    <hr>
    <div class="half left">
      <animal-list [animals]="animals" (detailsSender)="viewDetails($event)"></animal-list>
    </div>
    <div class="half right">
      <animal-detail [selectedAnimal]="selectedAnimal"></animal-detail>
      <new-animal [showFormNewAnimal]="showFormNewAnimal" (newAnimalSender)="saveNewAnimal($event)"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal("Artic Fox", "Moony", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises")
  ]
  selectedAnimal = null;
  showFormNewAnimal: boolean = false;

  viewDetails(animal: Animal) {
    this.showFormNewAnimal = false;
    this.selectedAnimal = animal;
  }

  clickNew() {
    this.selectedAnimal = null;
    this.showFormNewAnimal = true;
  }

  saveNewAnimal(animal: Animal) {
    this.animals.push(animal);
    this.showFormNewAnimal = false;
    this.selectedAnimal = animal;
  }
}

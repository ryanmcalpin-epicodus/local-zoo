import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `
  <div *ngIf="showAnimalDetails">
    <div class="panel panel-default">
      <div class="panel-body details">
        <button (click)="clickEdit(selectedAnimal)" id="edit-butt" class="btn-sm right">EDIT</button>
        <h3 class="form-title">Animal Details</h3>
        <hr class="line">
        <p>Name: {{selectedAnimal.name}}</p>
        <p>Species: {{selectedAnimal.species}}</p>
        <p>Age: {{selectedAnimal.age}}</p>
        <p>Diet: {{selectedAnimal.diet}}</p>
        <p>Location: {{selectedAnimal.location}}</p>
        <p>Caretakers: {{selectedAnimal.caretakers}}</p>
        <p>Sex: {{selectedAnimal.sex}}</p>
        <p>Likes: {{selectedAnimal.likes}}</p>
        <p>Dislikes: {{selectedAnimal.dislikes}}</p>
      </div>
    </div>
  </div>
  `
})

export class AnimalDetailComponent {
  @Input() selectedAnimal: Animal;
  @Input() showAnimalDetails: boolean;
  @Output() editSender = new EventEmitter();

  clickEdit(animal: Animal) {
    this.editSender.emit(animal);
  }
}

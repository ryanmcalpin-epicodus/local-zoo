import {Component, Input} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `
  <div *ngIf="selectedAnimal">
    <div class="panel panel-default">
      <div class="panel-body details">
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
}

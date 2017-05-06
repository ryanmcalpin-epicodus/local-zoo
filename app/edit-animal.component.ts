import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="showEditAnimalForm">
    <div class="panel panel-default">
      <div class="panel-body details-edit">
        <h3 class="form-title">Edit {{selectedAnimal.name}}</h3>
        <input [(ngModel)]="selectedAnimal.name" class="form-control" placeholder="NAME">
        <input [(ngModel)]="selectedAnimal.age" type="number" min="0" class="form-control" placeholder="AGE">
        <input [(ngModel)]="selectedAnimal.location" class="form-control" placeholder="LOCATION">
        <input [(ngModel)]="selectedAnimal.caretakers" type="number" min="1" class="form-control" placeholder="CARETAKERS">
        <input [(ngModel)]="selectedAnimal.likes" class="form-control" placeholder="LIKES">
        <input [(ngModel)]="selectedAnimal.dislikes" class="form-control" placeholder="DISLIKES">
        <div class="submit-butt-div">
          <button (click)="clickSubmit()" class="btn-lg submit-butt">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() showEditAnimalForm: boolean;
  @Input() selectedAnimal: Animal;
  @Output() editSender = new EventEmitter();

  clickSubmit() {
    this.editSender.emit();
  }
}

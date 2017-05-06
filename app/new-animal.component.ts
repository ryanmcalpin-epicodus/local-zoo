import {Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="showFormNewAnimal">
    <div class="panel panel-default">
      <div class="panel-body details">
        <h3 class="form-title">New Animal</h3>
        <input #name class="form-control" placeholder="NAME">
        <input #species class="form-control" placeholder="SPECIES">
        <input #age type="number" min="0" class="form-control" placeholder="AGE">
        <input #diet class="form-control" placeholder="DIET">
        <input #location class="form-control" placeholder="LOCATION">
        <input #caretakers type="number" min="1" class="form-control" placeholder="CARETAKERS">
        <input #sex class="form-control" placeholder="SEX">
        <input #likes class="form-control" placeholder="LIKES">
        <input #dislikes class="form-control" placeholder="DISLIKES">
        <div id="submit-butt-div">
          <button (click)="clickSubmit(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)" class="btn-lg submit-butt">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() showFormNewAnimal: boolean;
  @Output() newAnimalSender = new EventEmitter();

  clickSubmit(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    if (name===''||species===''||age<0||diet===''||location===''||caretakers<=0||sex===''||likes===''||dislikes==='') {
      alert("Please complete all fields of the form.");
    } else {
      var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimal);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Truck',
    power: 10
  }]

  @Output()
  public OnDelete: EventEmitter<string>= new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if (!id) return;
    this.OnDelete.emit(id);
  }
}

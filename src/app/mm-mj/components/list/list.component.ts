import { Component, Input } from '@angular/core';
import { Character } from 'src/app/mm-mj/interfaces/character.interface';

@Component({
  selector: 'mmmj-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      descripcionSeguro: 'MEL',
      importeSeguro: 10,
  }]

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/mm-mj/interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

    //Creamos instáncia de eventos
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();
    @Output()
    public deleteCharacterById: EventEmitter<number> = new EventEmitter();
    @Output()
    public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

    public character: Character = {
    id: uuid(),
    descripcionSeguro: '',
    importeSeguro: 0,
  }

  AddSeguro(): void {

    //debugger;

    //this.SeguroNuevo = ""
    console.log(this.character)

    if ( this.character.descripcionSeguro.length === 0
        && this.character.importeSeguro === 0)
    {
        alert('La descripción y el importe han de estar cumplimentados')
        return;
    }

    this.onNewCharacter.emit(this.character)

    //this.character.descripcionSeguro = '';
    //this.character.importeSeguro = 0;
    this.character = {descripcionSeguro: '',importeSeguro: 0 }
    alert('Hemos añadiro un seguro nuevo a la lista')

  }
}

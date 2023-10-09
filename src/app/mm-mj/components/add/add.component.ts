import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/mm-mj/interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

    //Creamos instáncia de eventos
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
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
      //if (numVeces === 0)
      //{
      //  numVeces = 1
        alert('La descripción y el importe han de estar cumplimentados')
        return;
      //}
    }

    //if ( this.character.importeSeguro === 0)
    //{
    //  alert('Ha de rellenar importe')
    //  return;
    //}

    this.onNewCharacter.emit(this.character)

    //this.character.descripcionSeguro = '';
    //this.character.importeSeguro = 0;
    this.character = {descripcionSeguro: '',importeSeguro: 0 }
    alert('Hemos añadiro un seguro nuevo a la lista')

  }

}

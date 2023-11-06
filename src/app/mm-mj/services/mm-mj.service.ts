
import { EventEmitter, Output } from '@angular/core';
import { Injectable, ɵɵqueryRefresh } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class mmmjservice {

  public contador: number = 0;
  public MainText: string = "Bienvenidos a Mutual Médica";
  public characters: Character[] = [
  {
    id: uuid(),
    descripcionSeguro: 'Allargament 3 PJ',
    importeSeguro: 1560.00
  },
  {
    id: uuid(),
    descripcionSeguro: 'Allargament 3 PPA',
    importeSeguro: 1750.00
  },
  {
    id: uuid(),
    descripcionSeguro: 'Mutulista JOVE',
    importeSeguro: 1060.00
  },
  {
    id: uuid(),
    descripcionSeguro: 'Mutulista JOVE 2055',
    importeSeguro: 10060.00
  },
  {
    id: uuid(),
    descripcionSeguro: 'AEG 2024',
    importeSeguro: 10860.00
  },
  {
    id: uuid(),
    descripcionSeguro: 'AJ MEL Vida Estalvi',
    importeSeguro: 10860.00
  }
];

public addCharacter(character : Character):void{
  //debugger;

  //Para recibir todos los parámetros
  const newCharacter: Character = {id: uuid(), ...character }

  //Final de la lista
  this.characters.push(newCharacter);

  console.log(newCharacter)

  // Inicio lista
  //this.characters.unshift(character);
  //console.log('MainPage');
  //console.log(character);
}


 @Output()
 public onDelete: EventEmitter<string> = new EventEmitter();

public deleteCharacterById(id?: string):void{



  // if (!id) {

    // alert('No hay valor');
  //  // return;

  //}

  this.onDelete.emit(id)

  console.log('borramos-id',{id})

  // console.log('borramos-id1',{id})
  // console.log('borramos-id2',{id2})
}
  //public deleteCharacterById(id: string) {

    //debugger;
    //Borrar Id seguro
 //   this.characters = this.characters.filter(character => character.id !== id);

  //  console.log(id);

  //}

  //onDeleteId = INJECTOR
//public onDeleteCharacter(id: string):void{
  //Borrar Id seguro
  //this.characters.splice(index,1);

//  this.onDelete.emit(id)

  //this.contador = + index

  //if ( this.contador === 1 ){

//    console.log(id);
    //alert('Elemento eliminado')
//    return;

//}

}

//}
  //constructor() { }


  //onNewCharacter(character: Character):void{
    //debugger;
    //Final de la lista
  //  this.characters.push(character);
    // Inicio lista
    //this.characters.unshift(character);
    //console.log('MainPage');
    //console.log(character);
  //}

  //onDeleteId = Index value : number
  //onDeleteId = INJECTOR
  //@Output()
  //onDeleteId: EventEmitter<number> = new EventEmitter();
  //onDeleteCharacter(importeSeguro: number):void{
    //Emitir Id seguro
    //console.log({index});
  //  this.characters.splice(importeSeguro,1);
 // }
    //constructor() { }


  //}

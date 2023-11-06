import { Component, EventEmitter, INJECTOR, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { mmmjservice } from '../services/mm-mj.service';

@Component({
  selector: 'app-mm-mj-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(public mmmjservice:mmmjservice){}

  get characters(): Character [] {

    return [...this.mmmjservice.characters];
  }

  onDeleteCharacter(id: string):void{

    this.mmmjservice.deleteCharacterById ( id );

    if (id === 'NULL') {
      alert('No hay valor');
      console.log('Valor recibido',id);
      return;
    }

    console.log('Valor recibido',id);

  }

  onNewCharacter( character: Character ):void{

    this.mmmjservice.addCharacter ( character );

    console.log('Valor',character);
  }

}

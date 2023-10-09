import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-mm-mj-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    public MainText: string = "Bienvenidos a Mutual Médica";
    public characters: Character[] = [
    {
      descripcionSeguro: 'Allargament 3 PJ',
      importeSeguro: 1560.00
    },
    {
      descripcionSeguro: 'Allargament 3 PPA',
      importeSeguro: 1750.00
    },
    {
      descripcionSeguro: 'Mutulista JOVE',
      importeSeguro: 1060.00
    },
    {
      descripcionSeguro: 'Mutulista JOVE 2055',
      importeSeguro: 10060.00
    },
    {
      descripcionSeguro: 'AEG 2024',
      importeSeguro: 10860.00
    },
    {
      descripcionSeguro: 'AJ MEL Vida Estalvi',
      importeSeguro: 10860.00
    }
  ];

  onNewCharacter(character: Character):void{

    debugger;

    //Final de la lista
    this.characters.push(character);
    // Inicio lista
    //this.characters.unshift

    console.log('MainPage');
    console.log(character);

  }

}

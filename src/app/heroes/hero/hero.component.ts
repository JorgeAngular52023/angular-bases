import { Component } from '@angular/core';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent{

  //Declaración de variables y asignación de valores por defecto
    public name: string = 'IronMan';
    public age: number = 55;

    get capitalizedName():string {
        //return 'Capitalizamos'.toUpperCase();
        return this.name.toUpperCase();
    }

    public getHeroDescription():string {
      return `${ this.name} - ${ this.age}`;
    }

    public changeHero():void{

      //throw 'No implementado'
      this.name = 'Capitan América'

    }

    public changeAge():void{

      //throw 'No implementado'
      this.age = 45;

    }

    public resetForm():void{

      //throw 'No implementado'
      //this.name = 'IronMan';
      this.age = 55;

      //Modifica título del formulario (solo el primero que encuentre)
      //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h>'
      //Modifica título del formulario (todos que encuentre)
      document.querySelectorAll('h1')!.forEach (element => {
        element.innerHTML = '<h1>Desde Angular</h>'
      });

    }
}

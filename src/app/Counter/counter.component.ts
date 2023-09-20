import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  //template: '<h1>Hola Counter</h1>',
  template: `
    <p>
      <strong>Counter:</strong> {{counter}}
    </p>

    <button (click)="AumentaCounter(1)" >+Aumenta</button>
    <button (click)="Inicializar()" >Inicializa counter</button>
    <button (click)="AumentaCounter(-1)" >-Disminuye</button>
    `,
})

export class countercomponent{

    public counter: number  = 10;

    AumentaCounter(value: number):void {
      this.counter += value;
    }

    Inicializar():void {
      this.counter = 0;
    }

    DecrementamentaCounter(value: number):void {
      this.counter -= value;
    }

  }


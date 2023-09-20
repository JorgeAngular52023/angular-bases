import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string  = 'Mi primera App de Angular';
  public ContingutText: string  = 'Empezando a hacer una página';
  public counter: number  = 0;

  AumentaCounter(value: number):void {
    this.counter += value;
    //this.counter +=1;
    //this.counter = this.counter + 1;
  }

  Inicializar():void {
    this.counter = 10;
    //this.counter -=1;
    //this.counter = this.counter - 1;
  }


  DecrementamentaCounter(value: number):void {
    this.counter -= value;
    //this.counter -=1;
    //this.counter = this.counter - 1;
  }

}

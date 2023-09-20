import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','IronMan','Capitán américa','Hulk',
  'Aquaman','Batman']
  public deletedHeroFirst?: string;
  public deletedHeroLast?: string;

  removeFirstHero():void{
    //Primer elemento de la lista
    //this.heroNames.shift()
    this.deletedHeroFirst = this.heroNames.shift();
    console.log(this.deletedHeroFirst)

  }

  removeLastHero():void{
    //Último elemento de la lista
    //this.heroNames.pop()
    this.deletedHeroLast = this.heroNames.pop();
    console.log(this.deletedHeroLast)
  }

}

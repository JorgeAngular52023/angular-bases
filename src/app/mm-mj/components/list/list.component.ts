import { Character } from 'src/app/mm-mj/interfaces/character.interface';
import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mmmj-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      id: '0',
      descripcionSeguro: 'MEL',
      importeSeguro: 10,
  }];

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacter( id?: string ):void {

  //console.log('No borra nada',id)

  if ( !id ) return;
  this.onDelete.emit( id );
}

// public deleteCharacterById(id?: string):void{
//
  // if (!id) {
//
    // alert('No hay valor');
    // return;
//
  // }
//
  // var id2: number = + id;
//
//
  // console.log('borramos-id1',id)
  // console.log('borramos-id2',id2)
// }
}

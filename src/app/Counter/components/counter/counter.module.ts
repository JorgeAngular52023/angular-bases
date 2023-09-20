import { NgModule } from "@angular/core";
import { countercomponent } from "../../counter.component";


@NgModule({
  declarations: [
    countercomponent
  ],
  exports:[
    countercomponent
  ]
})
export class Countermodule {}

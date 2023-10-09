import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Countermodule } from './Counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageModule } from './mm-mj/services/mm-mj.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Countermodule,
    HeroesModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

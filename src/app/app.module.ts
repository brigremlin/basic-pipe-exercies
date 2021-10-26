
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPetsPipe } from './filterPets.pipe';
import { LowerCasePipe } from './lowercase.pipe';
import { XAmountOfCharactersPipe } from './x-amount-of-characters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LowerCasePipe,
    XAmountOfCharactersPipe,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

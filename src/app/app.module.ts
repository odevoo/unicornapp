import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { UnicornComponent }  from './components/unicorn.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UnicornComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatchesService } from './batches.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [BatchesService],    //add the service
  bootstrap: [AppComponent]
})
export class AppModule { }

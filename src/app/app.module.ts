import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { MyTableComponent } from './my-table/my-table.component';
import {FormsModule} from "@angular/forms";
import { SearchFilterPipe } from './search-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

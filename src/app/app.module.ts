import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocSearchComponent } from './loc-search/loc-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LocSearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // Import HttpClientModule after BrowserModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

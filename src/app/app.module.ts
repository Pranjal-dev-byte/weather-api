import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocSearchComponent } from './loc-search/loc-search.component';

@NgModule({
  declarations: [AppComponent, LocSearchComponent],
  imports: [
    BrowserModule,
    // Import HttpClientModule after BrowserModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

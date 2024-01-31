import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NgModel
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    AppComponent,
    NgModel
  ],
  providers: [HttpClientModule, EmployeeService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
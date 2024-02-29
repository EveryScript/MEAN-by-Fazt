import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BreakingBadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

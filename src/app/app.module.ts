import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'List', component: AllstudentsComponent },
  { path: 'edit/:id', component: TestComponent },
  { path: 'New', component: TestComponent },
  {path:"", redirectTo:"List", pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AllstudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

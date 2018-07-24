import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrudService } from './services/crud.service';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

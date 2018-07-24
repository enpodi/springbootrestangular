import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrudService } from './services/crud.service';
import { AdminComponent } from './components/admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

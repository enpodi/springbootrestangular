import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrudService } from './services/crud.service';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

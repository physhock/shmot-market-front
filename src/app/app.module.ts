import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { HomeBuyerComponent } from './market/home-buyer/home-buyer.component';
import { MatDialogModule } from '@angular/material'
import { ModalWindowComponent } from './market/modal-window/modal-window.component';
import { HomeSellerComponent } from './market/home-seller/home-seller.component';
import { HomeAdminComponent } from './market/home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeBuyerComponent,
    ModalWindowComponent,
    HomeSellerComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalWindowComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

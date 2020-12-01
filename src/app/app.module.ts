import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DeleteDialogComponent } from "./common/delete/deletedialog.component";
import { LoginComponent } from './security/login/login.component';
import { FormsModule } from '@angular/forms';
import { CustumerComponent } from './custumer/custumer.component';
import { CustomerDialogComponent } from './custumer/custumerdialog.component';
import { JwtInterceptor } from './security/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteDialogComponent,
    CustumerComponent,
    CustomerDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ClotheModule } from './clothe/clothe.module';
import { AppEmailDirective } from './validators/AppEmailDirective';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClothesComponent,
    HomeComponent,
    AppEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    ClotheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

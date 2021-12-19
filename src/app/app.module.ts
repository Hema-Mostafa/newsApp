import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinksbarComponent } from './linksbar/linksbar.component';
import { NewsinfoComponent } from './newsinfo/newsinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { NewscardsComponent } from './newscards/newscards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinksbarComponent,
    NewsinfoComponent,
    NewscardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forRoot([
      {path : '' , component : NewsinfoComponent},
      {path : 'news/:text' , component : NewscardsComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

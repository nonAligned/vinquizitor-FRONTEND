import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchComponent } from './wine/search/search.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineComponent } from './wine/wine-list/wine/wine.component';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';
import { WineStyleComponent } from './wine/wine-details/wine-style/wine-style.component';
import { WineGlassComponent } from './wine/wine-details/wine-glass/wine-glass.component';
import { WineGlassModalComponent } from './wine/wine-details/wine-glass/wine-glass-modal/wine-glass-modal.component';
import { FilterComponent } from './wine/search/filter/filter.component';
import { SortComponent } from './wine/search/sort/sort.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ContactComponent,
    SearchComponent,
    WineListComponent,
    WineComponent,
    WineDetailsComponent,
    WineStyleComponent,
    WineGlassComponent,
    WineGlassModalComponent,
    FilterComponent,
    SortComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

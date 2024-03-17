import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/homepage/homepage.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchComponent } from './wine/search/search.component';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent, data: {animation:  "Homepage"}},
  {path: "contact", component: ContactComponent, data: {animation:  "Contact"}},
  {path: "search", component: SearchComponent, data: {animation:  "Search"}},
  {path: "search/:id", component: WineDetailsComponent, data: {animation:  "WineDetails"}},
  {path: "quiz", component: QuizComponent, data: {animation:  "Quiz"}},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent, data: {animation:  "PageNotFound"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "disabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

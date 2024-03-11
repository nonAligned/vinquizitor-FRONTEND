import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/homepage/homepage.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchComponent } from './wine/search/search.component';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "contact", component: ContactComponent},
  {path: "search", component: SearchComponent},
  {path: "search/:id", component: WineDetailsComponent},
  {path: "quiz", component: QuizComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "disabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

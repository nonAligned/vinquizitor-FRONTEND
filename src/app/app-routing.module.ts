import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/homepage/homepage.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchComponent } from './wine/search/search.component';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "contact", component: ContactComponent},
  {path: "search", component: SearchComponent},
  {path: "search/:id", component: WineDetailsComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

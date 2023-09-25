import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/homepage/homepage.component';
import { ContactComponent } from './core/contact/contact.component';
import { SearchComponent } from './wine/search/search.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "contact", component: ContactComponent},
  {path: "search", component: SearchComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

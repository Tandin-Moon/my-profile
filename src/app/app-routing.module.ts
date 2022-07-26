import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './screen/home-section/home-section.component';
import { AboutComponent } from './screen/about/about.component';
import { ServicesComponent } from './screen/services/services.component';
import { PortfolioComponent } from './screen/portfolio/portfolio.component';
import { ContactComponent } from './screen/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeSectionComponent },
  {path: 'about', component: AboutComponent },
  // {path: 'services', component: ServicesComponent },
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

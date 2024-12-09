import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component:HomeComponent }, // Redirect the default path to the Contact page
  { path: 'contact', component: ContactComponent }, // Route for the Contact page
  { path: 'products', component: ProductsComponent }, // Route for the Contact page
  { path: 'about', component: AboutComponent }, // Route for the Contact page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

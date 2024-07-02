import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertHomeComponent } from './dessert-home/dessert-home.component';
import { DessertAboutComponent } from './dessert-about/dessert-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'desserts',
    pathMatch: 'full'
  },
  {
    path: 'desserts',
    component: DessertHomeComponent
  },
  {
    path: 'about',
    component: DessertAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

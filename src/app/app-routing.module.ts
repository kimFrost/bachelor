import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: AppComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}

/*
const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];
*/

//export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


//https://www.sitepoint.com/component-routing-angular-router/
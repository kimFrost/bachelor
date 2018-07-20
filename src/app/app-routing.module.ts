import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { BattleComponent } from './battle/battle.component';
import { BattleHistoryComponent } from './battle-history/battle-history.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'history',
    component: BattleHistoryComponent
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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { PlayersComponent } from './players/players.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { BattleComponent } from './battle/battle.component';
import { BattleHistoryComponent } from './battle-history/battle-history.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ChallengesComponent,
    BattleComponent,
    BattleHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

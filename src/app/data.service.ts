import { config } from "./app.config";
import { Player, Battle, Challenge, HistoryEntry } from "./models/bachelor";

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';


import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  playersCollection: AngularFirestoreCollection<Player>;
  playersDoc: AngularFirestoreDocument<Player>;
  players: Observable<Player[]>;

  challengesCollection: AngularFirestoreCollection<Challenge>;
  challengesDoc: AngularFirestoreDocument<Challenge>;
  challenges: Observable<Challenge[]>;

  constructor(private db: AngularFirestore) {

    this.playersCollection = this.db.collection('players', x => x.orderBy('firstName', 'asc'));
    this.challengesCollection = this.db.collection('challenges');

    //this.players = db.collection<Player>('players');
    //this.players = db.collection<Player>('players').valueChanges();
    this.challenges = db.collection<Challenge>('challenges').valueChanges();
    
    this.players =
      //this.db.collection(config.collection_endpoint)
      this.playersCollection
        .snapshotChanges()
        .pipe(map(actions => {
          return actions.map(a => {
            //Get document data
            const data = a.payload.doc.data() as Player;
            //Get document id
            const id = a.payload.doc.id;
            //Use spread operator to add the id to the document data
            return { id, ...data };
          });
        }));

  }

  public getPlayers() {
    return this.players;
  }

  public getChallenges() {
    return this.challenges;
  }

  public addPlayer(player: Player) {
    this.playersCollection.add(player);
  }

  public deletePlayer(player: Player) {
    this.playersDoc = this.db.doc(`players/${player.id}`);
    this.playersDoc.delete();
  }

}
